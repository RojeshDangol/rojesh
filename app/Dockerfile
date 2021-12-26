ARG WORK_DIR=/build

FROM node:14.17 as builder

ARG WORK_DIR
ENV PATH ${WORK_DIR}/node_modules/.bin:$PATH

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

RUN npm cache clean --force

COPY package.json ${WORK_DIR}
COPY package-lock.json ${WORK_DIR}

RUN npm install @angular/cli
RUN npm install

COPY . ${WORK_DIR}

RUN ng build --prod

FROM nginx:latest

ARG WORK_DIR

COPY --from=builder ${WORK_DIR}/dist/app /usr/share/nginx/html

RUN rm -rf ${WORK_DIR}/etc/nginx/conf.d
COPY ./nginx/nginx.conf ${WORK_DIR}/etc/nginx/conf.d/

RUN echo "daemon off;" >> ${WORK_DIR}/etc/nginx/conf.d/nginx.conf

EXPOSE 80

RUN nginx