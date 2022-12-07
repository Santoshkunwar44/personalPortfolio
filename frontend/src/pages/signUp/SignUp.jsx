import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerApi } from "../../utility/urls/auth"
import { useNavigate } from "react-router-dom"
import "./signup.css"
import { setToastInfo } from "../../redux/action/utilityAction"
const SignUp = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [authData, setAuthData] = useState({})



    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { data } = await registerApi(authData)
            console.log(data)
            navigate("/")
            dispatch({ type: "SAVE_USER_DATA", data: data.message })
            dispatch(setToastInfo({ title: "Signup Success ", desc: "Signed  up successfully", type: "success" }))
        } catch (error) {
            console.log(error)
            dispatch(setToastInfo({ title: "Signup Failed ", desc: "Something went wrong", type: "error" }))
        }
    }


    const handleChange = (e) => {
        setAuthData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }


    console.log("auth data", authData)

    return (
        <div className="SignUp">
            <div>

            </div>
            <div className="form_container">
                <div className="SignUp_header">
                    <h1 className="form_header_text">Santosh PortBook</h1>
                    <div className="signUp_headerInfo">
                        <p>Sign up to be the memeber of Santosh Portbook & access the source code for applications.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form" >
                    <input onChange={handleChange} type="text" placeholder="username" name="username" id="username" />
                    <input onChange={handleChange} type="text" placeholder="email" name="email" id="username" />
                    <input onChange={handleChange} type="text" placeholder="password" name="password" id="password" />
                    <div className="terms_condition">

                        <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                    </div>
                    <button className="auth_SignUpBtn">REGISTER</button>
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
                    <div className="loginWith">
                        <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                        <span>

                            Login with Google
                        </span>
                    </div>
                </div>
            </div>
            <div className="down_box">
                <span>Already have account ? <span className="signUp_text" onClick={() => navigate("/authenticate")}>Login  </span> </span>
            </div>

        </div >
    )
}

export default SignUp