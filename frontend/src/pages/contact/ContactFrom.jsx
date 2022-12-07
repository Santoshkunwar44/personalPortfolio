import { Suspense, useState } from "react"
import "./contactform.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { IconButton } from "@mui/material";
import { sendEmailApi } from "../../utility/urls/email";
import { Canvas } from "react-three-fiber"
import { ModelForm } from "../../components/local/models/GmailModel";
import { OrbitControls } from "@react-three/drei";
import { setToastInfo } from "../../redux/action/utilityAction";
import { useDispatch } from "react-redux"
const ContactFrom = () => {
    const dispatch = useDispatch()
    const [mailState, setMailState] = useState({
        message: "",
        from: "",

    })


    const handleChange = (e) => {
        setMailState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async () => {


        try {
            const { data } = await sendEmailApi(mailState)
            console.log("the email api response", data)
            dispatch(setToastInfo({ title: "Email Sent !", desc: "Your message was successfully sent", type: "success" }))
            setMailState({
                message: "",
                from: ""
            })

        } catch (error) {
            console.log(error)
            dispatch(setToastInfo({ title: "Failed to sent !", desc: "Something went wrong .Try again !", type: "error" }))
        }
    }

    return (

        <div className='form_wrapper'>
            <div className="form_header">
                <h3 className={"section_title"}>Mail Me</h3>
            </div>
            <div className="messageBoxText">

                <h3 className="Leave">Leave A Message </h3>
            </div>
            <div className="formContainer">
                <div className='formInput'>
                    <input type="text" required value={mailState.from} onChange={handleChange} name="from" className="contactInput" placeholder="Your email Address" />
                    <input onChange={handleChange} required placeholder="Leave a Message" value={mailState.message} name="message" cols="30" rows="5  "></input>
                    <button className="sentEmailBtn" onClick={handleSubmit}>Sent</button>
                </div>
            </div>
        </div >
    )
}

export default ContactFrom