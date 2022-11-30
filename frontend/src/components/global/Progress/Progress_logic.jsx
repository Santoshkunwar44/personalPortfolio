import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import useUploadImage from '../../../hooks/useUploadImage'
import { addTools } from '../../../utility/urls/tools'
import Progress from "./Progress"

const Progress_logic = ({ setStart, toolsState, setToolsState }) => {


    const { urls, success, taskRef, progress, error } = useUploadImage([toolsState.src], 'tools', toolsState)


    useEffect(() => {
        if (success) {
            let theData = { ...toolsState, src: urls[0] }
            AddData(theData)
        } else if (error) {
            setStart(false)
        }

    }, [success, error])



    const AddData = async (data) => {
        console.log('adding', data)
        try {
            addTools(data)

        } catch (error) {

            console.log(error)

        }
        setStart(false)
    }




    return (
        <>

            <Progress progress={progress} />
        </>
    )
}

export default Progress_logic