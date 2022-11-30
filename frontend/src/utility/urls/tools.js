import instance from "../axios";

export const addTools = (data) => instance.post("/tools", data)
export const getTools = () => instance.get("/tools")