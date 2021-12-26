FROM node:14.17

ARG WORK_DIR=/server
ENV WORK_DIR ${WORK_DIR}

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

COPY package*.json ${WORK_DIR}

RUN npm install

COPY . ${WORK_DIR}

EXPOSE 3000

RUN npm install -g nodemon

CMD npm start