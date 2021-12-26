export const environment = {
  production: true,
  BASE_URL: "http://server.centralus.azurecontainer.io:3000",
  Auth:{
    register: "/users/register",
    login: "/users/login",
    profile: "/users/profile"
}, Notes:{
  create: "/notes/create",
  add: "/notes/add",
  get: "/notes/get",
  delete: "/notes/delete",
  update: "/notes/update",
  upadateTitle: "/notes/updateTitle",
}
};
