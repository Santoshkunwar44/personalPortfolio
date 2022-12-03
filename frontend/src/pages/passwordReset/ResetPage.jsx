import "./resetpage.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendConfirmationCodeApi } from "../../utility/urls/email"
import { setOtpInfo } from "../../redux/action/utilityAction"

const ResetPage = () => {

    const dispatch = useDispatch()
    const otpInfo = useSelector((state) => state.utilityReducer)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState("")

    const handleSubmit = async () => {

        try {
            const { data } = await sendConfirmationCodeApi({ email })
            dispatch(setOtpInfo({ type: "setOtpInfo", data: data.message }))
            navigate("/verify_otp")
        } catch (error) {
            let errorText = error?.response?.data?.message;
            if (!errorText) return
            setError(errorText)
        }
    }






    return (
        <div className='reset_page'>
            <div className="reset_box">
                <div className="reset_header">
                    <h2 className="reset_header_text">RESET PASSWORD</h2>
                </div>
                <div className="reset_page_header_info">
                    <p>The confirmation code will be sent to your email and then you will be able to change your password</p>

                </div>
                <div className="reset_page_input_box">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={"email address"} />

                </div>
                <button onClick={handleSubmit} className="send_verfification_code_btn">
                    SEND VERFICATION CODE
                </button>
                {
                    error && <p className="errorText">{error}</p>
                }
            </div>
            <div className="down_box">
                <span>Back to Login . <span className="signUp_text" onClick={() => navigate("/authenticate")}>Login  </span> </span>
            </div>
        </div >
    )
}

export default ResetPage