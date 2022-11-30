import instance from "../axios";


export const getChatApi = (userId) => instance.get(`/chat/${userId}`)

