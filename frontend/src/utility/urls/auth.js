import instance from "../axios";

export const loginApi = (data) => instance.post("/auth/login", data)
export const registerApi = (data) => instance.post("/auth/register", data)
export const getLoggedInUserApi = () => instance.get("/user/loggedUser")



