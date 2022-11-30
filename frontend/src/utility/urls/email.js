import axios from "axios"
import instance from "../axios"


export const sendEmailApi = (data) => axios.post("http://localhost:8000/api/email/send", data)
export const sendConfirmationCodeApi = (data) => axios.post("http://localhost:8000/api/email/reset_password", data)

export const verifyOtpApi = (data) => instance.post('/email/verify_otp', data)

export const setNewPasswordApi = (data) => instance.post("/auth/new_password", data)
