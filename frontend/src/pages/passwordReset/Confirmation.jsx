import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { verifyOtpApi } from '../../utility/urls/email'
import { useNavigate } from "react-router-dom"

const Confirmation = () => {

    const otpData = useSelector((state) => state.utilityReducer.otpData)
    const [start, setStart] = useState(false)
    const [currentInputRef, setCurrentIntputRef] = useState("1")
    let { email, hashed } = otpData ?? {};

    const theRefs = {
        otpInputRef1: useRef(),
        otpInputRef2: useRef(),
        otpInputRef3: useRef(),
        otpInputRef4: useRef(),
        otpInputRef5: useRef(),

    }

    const navigate = useNavigate()


    useEffect(() => {
        if (currentInputRef === "6") {
            setStart(true)
            let otp = ""
            for (const key in theRefs) {

                otp += theRefs[key].current.value

            }
            handleSubmit(otp)
            return
        }
        let theInputRef = "otpInputRef" + currentInputRef
        const currentRefInput = theRefs[theInputRef]
        currentRefInput.current.focus()

    }, [currentInputRef])

    const handleOptInputChange = (e) => {
        let theprevInput = +e.target.name
        let nextRef = theprevInput + 1







        setCurrentIntputRef(nextRef.toString())



    }

    const handleSubmit = async (otp) => {

        const dataObj = {
            email,
            otp,
            hash: hashed
        }

        try {
            const { data } = await verifyOtpApi(dataObj)
            navigate("/create_new_password")
            console.log(data)

        } catch (error) {
            console.log(error)

        }
    }









    return (
        <div className='confirmation'>

            <div className="confirmationBox">
                <div className='confirmation_box_header_info'>
                    <p>Confirmation Code  to reset your password have been sent to {email} Please check your  <span className='confirmation_spam_text'> Inbox / Spam folder / All Mails in gmail </span> </p>

                </div>


                <div className='inputBoxWrapper'>
                    <input onChange={(e) => handleOptInputChange(e, 1)} name={'1'} ref={theRefs.otpInputRef1} type="text" />
                    <input onChange={(e) => handleOptInputChange(e, 2)} name={'2'} ref={theRefs.otpInputRef2} type="text" />
                    <input onChange={(e) => handleOptInputChange(e, 3)} name={'3'} ref={theRefs.otpInputRef3} type="text" />
                    <input onChange={(e) => handleOptInputChange(e, 4)} name={'4'} ref={theRefs.otpInputRef4} type="text" />
                    <input onChange={(e) => handleOptInputChange(e, 5)} name={'5'} ref={theRefs.otpInputRef5} type="text" />
                </div>

                {/* <input onChange={(e) => setConfirmationCode(e.target.value)} type="text" value={confirmationCode} /> */}
                <button className='confirmation_code_verify_btn' onClick={handleSubmit}>{start ? 'VERIFYING' : "VERIFY"}</button>
                <div className='resend_verification_code_text'>Resend verfication code ?</div>
            </div>
        </div>
    )
}

export default Confirmation