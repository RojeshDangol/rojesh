export const environment = {
    production: false,
    BASE_URL: "http://localhost:3000",
    Auth:{
        register: "/users/register",
        login: "/users/login",
        profile: "/users/profile"
    },
    Notes:{
        create: "/notes/create",
        add: "/notes/add",
        get: "/notes/get",
        delete: "/notes/delete",
        update: "/notes/update",
        upadateTitle: "/notes/updateTitle",
    }
}
