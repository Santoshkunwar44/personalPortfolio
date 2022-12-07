import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginApi } from "../../utility/urls/auth"
import { useNavigate } from "react-router-dom"
import "./authenticate.css"
import { setToastInfo } from "../../redux/action/utilityAction"
const Authenticate = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [authData, setAuthData] = useState({

    })



    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await loginApi(authData)
            console.log(data)
            navigate("/")
            dispatch({ type: "SAVE_USER_DATA", data: data.message })
            dispatch(setToastInfo({ title: "Login Successfull", desc: "You are loggedin successfully", type: "success" }))
        } catch (error) {
            dispatch(setToastInfo({ title: "Login Failed", desc: "Something Went wrong", type: "error" }))
            console.log(error)
        }
    }


    const handleChange = (e) => {
        setAuthData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }


    const handleLoginWith = (type) => {
        if (type === "google") {
            window.open("http://localhost:8000/api/passport/google", "_self")
        } else if (type === 'facebook') {
            window.open("http://localhost:8000/api/passport/facebook", "_self")
        }
    }

    return (
        <div className="authenticate">
            <div>

            </div>
            <div className="form_container">
                <div className="authenticate_header">
                    <h1 className="form_header_text">Santosh PortBook</h1></div>
                <form onSubmit={handleSubmit} className="form" >
                    <input onChange={handleChange} type="text" placeholder="email" name="email" id="username" />
                    <input onChange={handleChange} type="text" placeholder="password" name="password" id="password" />
                    <button className="auth_login_button">LOGIN</button>
                    <span className="forgot_password_btn" onClick={() => navigate("/reset_page")}>Forgot password ?</span>
                </form>
                <div className="dividerBox">
                    <div className="divider"></div> <span className="or_text">Or</span>
                    <div className="divider"></div>
                </div>
                <div className="loginWithBoxAuth">

                    <div className="loginWith">
                        <img src="https://img.icons8.com/color/48/null/facebook.png" />
                        <span>
                            Login with Facebook
                        </span>
                    </div>
                    <div className="loginWith" onClick={() => handleLoginWith("google")}>
                        <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                        <span>

                            Login with Google
                        </span>
                    </div>
                </div>
            </div>
            <div className="down_box">
                <span>Do not have account ? <span className="signUp_text" onClick={() => navigate("/signup")}>Sign up </span> </span>
            </div>

        </div>
    )
}

export default Authenticate