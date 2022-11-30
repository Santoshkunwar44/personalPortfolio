import React, { useEffect, useState, useRef } from 'react'
import ProgressLogic_project from '../../../components/global/Progress/ProgressLogic_project'
import { getTools } from '../../../utility/urls/tools'
import ProjectForm from './ProjectForm'

const ProjectLogic = () => {



    const [projectState, setProjectState] = useState({})
    const [tools, setTools] = useState([])
    const [start, setStart] = useState(false)
    const [imagesItem, setImagesItem] = useState([])
    const [imagesCount, setImagesCount] = useState(null)
    const [dispatchState, setDispatchState] = useState(null)
    const [curr_featureCount, setCurr_featureCount] = useState([{
        id: 0,
        value: ""
    }])
    const [up_FeatureCount, setup_fetureCount] = useState([
        {
            id: 0,
            value: ""
        }
    ])
    const [pagesCount, setPagesCount] = useState([{
        name: "",
        src: "",
        darkMode: ""
    }])



    useEffect(() => {
        fetchtheTools()
    }, [])

    const fetchtheTools = async () => {

        try {
            const { data } = await getTools()
            setTools(data.message)


        } catch (error) {
            console.log(error)
        }

    }


    const handleChange = (e, name) => {


        let value = null
        value = e.target.value
        if (name === "darkMode") {
            value = e.target.checked
            setValues(e.target.name, value)
        } else if (name === "usedTools") {
            handleToolsUsedChange(e, name)
        } else {
            setValues(e.target.name, value)
        }
    }

    const setValues = (name, value) => {

        setProjectState(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleToolsUsedChange = (e, name) => {


        const usedTools = [...e.target.options].filter(option => option.selected).map(option => option.value)

        setValues(name, usedTools)





    }

    // handle features 




    // remove 

    function remove(type, index) {

        if (type === "currentFeatures") {

            if (curr_featureCount.length === 1) return
            const rem_count = curr_featureCount.filter(count => count !== index)

            setCurr_featureCount(rem_count)


        } else if (type === "upcomingFeatures") {


            if (up_FeatureCount.length === 1) return

            const rem_count = up_FeatureCount.filter(count => count !== index)

            setup_fetureCount(rem_count)



        } else if (type === "pages") {
            console.log("del", index)
            if (pagesCount.length === 1) return
            const rem_count = pagesCount.filter(count => count !== index)
            setPagesCount(rem_count)
        }

    }






    // add more

    function addMore(type) {

        if (type === "currentFeatures") {
            setCurr_featureCount(prev => [...prev, {
                id: prev.length,
                value: ""
            }])
        } else if (type === "upcomingFeatures") {
            setup_fetureCount(prev => [...prev, {
                id: prev.length,
                value: ""
            }])
        } else if (type === "pages") {
            setPagesCount(prev => [

                ...prev, {
                    name: "",
                    src: "",
                    darkMode: ""
                }
            ])
        }



    }


    const getTheFeaturesArray = (data, name) => {

        let featuredData = data.map(feature => feature.value)
        setProjectState((prev) => ({
            ...prev, [name]: featuredData
        }))


    }

    function theChange(e, type, id) {


        if (type === "currentFeatures") {
            let data = [...curr_featureCount]
            data = data.map((item, index) => index === id ? { ...item, value: e.target.value } : item)
            setCurr_featureCount(data)
            getTheFeaturesArray(data, type)
        } else if (type === "upcomingFeatures") {
            let data = [...up_FeatureCount]
            data = data.map((item, index) => index === id ? { ...item, value: e.target.value } : item)
            console.log(data)
            setup_fetureCount(data)
            getTheFeaturesArray(data, type)

        } else if (type === "pages") {
            let name = e.target.name;
            let data = [...pagesCount]
            if (name === "src") {
                data = data.map((item, index) => index === id ? { ...item, [name]: e.target.files[0] } : item)
                setPagesCount(data)

            } else if (name === "darkMode") {
                console.log("inside darkmod")
                let value = e.target.value === "No" ? false : true
                data = data.map((item, index) => index === id ? { ...item, [name]: value } : item)
                setPagesCount(data)
            } else {

                data = data.map((item, index) => index === id ? { ...item, [name]: e.target.value } : item)
                setPagesCount(data)
                setProjectState((prev) => ({
                    ...prev, [type]: data
                }))
            }

            setProjectState((prev) => ({
                ...prev, [type]: data
            }))
        }



    }

    const fileRef = useRef()

    const handleUploadProject = (e, data) => {
        if (!data.editMode) {
            e?.preventDefault()
            setDispatchState(projectState)

        }
        const imageArr = data.pages

        let imagesArrdata = imageArr.filter((item) => {
            if (!item.src) {
                return false
            } else if (item.src) {
                let isString = typeof item.src === "string"
                if (isString) {
                    return false
                } else return true
            } else return true
        }).map((page, index) => {
            let file = page.src
            file.index = file.name + page.name
            return file

        }
        )
        console.log("the img rr ", imagesArrdata)
        setImagesCount(imagesArrdata.length)
        setImagesItem(imagesArrdata)
        setStart(true)






    }
    const renderToolsUsedOptions = tools?.map((tool) => (
        {
            label: tool.name, value: tool.name
        }
    ))

    const handleUpdate = (editedState) => {


        let clonedEditedState = { ...editedState }
        let usedTools = editedState.usedTools;
        if (usedTools?.value) {
            usedTools = usedTools.map((item) => item.value)
            clonedEditedState.usedTools = usedTools
        }

        setDispatchState(clonedEditedState)

        clonedEditedState.editMode = true
        console.log(usedTools, clonedEditedState)

        handleUploadProject(null, clonedEditedState)

    }


    return (
        <>

            <ProjectForm handleUpdate={handleUpdate} renderToolsUsedOptions={renderToolsUsedOptions} fileRef={fileRef} handleUploadProject={handleUploadProject} curr_featureCount={curr_featureCount} up_FeatureCount={up_FeatureCount} pagesCount={pagesCount} theChange={theChange} addMore={addMore} remove={remove} tools={tools} projectState={projectState} handleChange={handleChange} />
            {
                (start && imagesCount && imagesCount === imagesItem.length && dispatchState) && < ProgressLogic_project imageItem={imagesItem} data={projectState.pages} projectState={dispatchState} setStart={setStart} />
            }
        </>
    )
}

export default ProjectLogic