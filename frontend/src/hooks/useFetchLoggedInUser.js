import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getLoggedInUserApi } from "../utility/urls/auth"

const useFetchLoggedInUser = () => {


    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const dispatch = useDispatch()



    useEffect(() => {

        fetchLoggedInUserFunc()

    }, [])



    const fetchLoggedInUserFunc = async () => {

        try {
            const { data } = await getLoggedInUserApi()
            console.log(data)
            setUser(data.message)
            dispatch({ type: "SAVE_USER_DATA", data: data.message })

        } catch (error) {
            console.log(error)
            setError(error)
        }
    }


    return { user, error }


}
export default useFetchLoggedInUser