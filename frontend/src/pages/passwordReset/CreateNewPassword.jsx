import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { setUserAction } from '../../redux/action/authAction'
import { setNewPasswordApi } from '../../utility/urls/email'

const CreateNewPassword = () => {




    const { email } = useSelector((state) => state.utilityReducer.otpData)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [newPasswordData, setNewPasswordData] = useState({
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("")


    const handleChangePassword = (e) => {
        setNewPasswordData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }))
    }


    const handleSubmit = async () => {

        if (newPasswordData.password !== newPasswordData.confirmPassword) {
            setError("Password donot match ")
        }

        const dataObj = {
            email,
            password: newPasswordData.password
        }
        try {
            const { data } = await setNewPasswordApi(dataObj)
            dispatch({ type: "SAVE_USER_DATA", data: data.message })
            navigate("/")

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className='createNewPassword'>
            <div className="newPasswordBox">
                <span style={{ color: 'red' }}>{error}</span>
                <input value={newPasswordData.password} onChange={handleChangePassword} type="password" name="password" id="" />
                <input value={newPasswordData.confirmPassword} onChange={handleChangePassword} type="password" name="confirmPassword" id="" />
                <button onClick={handleSubmit}> SUBMIT</button>
            </div>
        </div>
    )
}

export default CreateNewPassword