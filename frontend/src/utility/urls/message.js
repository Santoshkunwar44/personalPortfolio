import instance from "../axios";


export const getMessageApi = (chatId) => instance.get(`/message/${chatId}`)
export const addMessageApi = (chatId, data) => instance.post(`/message`, data)
export const addNewMessageApi = (data) => instance.post(`/message/new`, data)




