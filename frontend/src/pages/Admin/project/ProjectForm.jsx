import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import PagesUploadForm from "../../../components/local/pages_uploadform/PagesUploadForm"
import Select from 'react-select'
import "./projectform.css"
const ProjectForm = ({ handleUpdate, renderToolsUsedOptions, curr_featureCount, pagesCount, up_FeatureCount, fileRef, handleUploadProject, theChange, addMore, handleChange, projectState, tools, remove }) => {

    const location = useLocation()

    const [editMode, setEditMode] = useState(false)
    const [theCurrentProject, setCurrentProject] = useState({})
    const [useToolsValues, setuseToolsValues] = useState(null)
    const [platFormValue, setPlatFormValue] = useState(null)


    const handleEditChange = (name, value) => {

        if (name === "type") {
            setCurrentProject((prev) => ({
                ...prev, [name]: [value]
            }))
            return
        }

        setCurrentProject((prev) => ({
            ...prev, [name]: value
        }))


    }


    useEffect(() => {

        if (location?.state?.data?.name) {
            let project = location.state.data
            setCurrentProject(location.state.data)
            setEditMode(true)
            setuseToolsValues(location.state.data.usedTools.map((item) => (
                { value: item, label: item }
            )))
            console.log("inside first useEffect")
            setPlatFormValue([{ label: project.platForm, value: project.platForm }]);
        }

    }, [location])

    useEffect(() => {
        setPlatFormValue([{ label: theCurrentProject.platForm, value: theCurrentProject.platForm }]);


    }, [theCurrentProject])

    function ChangeUsedToolsVal(name, value) {

        setuseToolsValues(value)

        handleEditChange(name, value)

        // let theTools = theCurrentProject.usedTools?.map((item) => (

        //     { value: item.value, label: item.value }
        // ))
        // setuseToolsValues(theTools)
    }


    const addMoreEdit = (type) => {

        if (type === "pages") {
            setCurrentProject((prev) => ({
                ...prev, [type]: [...prev[type], { darkMode: "", name: "", src: "" }]
            }))
        } else {


            setCurrentProject((prev) => ({
                ...prev, [type]: [...prev[type], ""]
            }))
        }

    }


    const editFeaturesEdit = (name, value, id) => {

        let clonedFeatures = theCurrentProject[name];

        clonedFeatures = clonedFeatures.map((item, index) => index === id ? item = value : item)

        console.log(clonedFeatures)
        setCurrentProject((prev) => (
            {
                ...prev, [name]: clonedFeatures
            }
        ))
    }





    const removeFeaturesEdit = (name, id) => {
        let clonedFeatuers = theCurrentProject[name]

        clonedFeatuers = clonedFeatuers.filter((item, index) => index !== id)
        setCurrentProject((prev) => (
            {
                ...prev, [name]: clonedFeatuers
            }
        ))
    }


    // pages edit 

    const handlePagesEdit = (type, name, value, id) => {


        let clonedPages = theCurrentProject[type]

        clonedPages = clonedPages.map((page, index) => index === id ? { ...page, [name]: value } : page)

        console.log("the changes", clonedPages)


        setCurrentProject((prev) => ({
            ...prev, [type]: clonedPages
        }))

    }


    const removePagesEdit = (type, id) => {
        let pagesClone = [...theCurrentProject.pages]
        pagesClone = pagesClone.filter((page, index) => index !== id)
        setCurrentProject((Prev) => ({
            ...Prev, [type]: pagesClone
        }))
    }


    // HANDLE UPDATE 
    console.log(theCurrentProject)


    return (
        <div className='admin_uploadBox'>
            <div className="form_container" >
                <div className="form_item">
                    <label> Application Name</label>

                    {editMode ?

                        <input onChange={(e) => { handleEditChange("name", e.target.value); }} className="form_values" type="text" name="name" placeholder='Project Name' value={theCurrentProject?.name} />
                        : <input onChange={(e) => handleChange(e, "name")} className="form_values" type="text" name="name" placeholder='Project Name' />
                    }

                </div>
                <div className="form_item">
                    <label >Application Type</label>
                    {
                        editMode ?
                            <input onChange={(e) => handleEditChange("type", e.target.value)} className="form_values" type="text" name="name" placeholder='Project Name' value={theCurrentProject?.type[0]} />
                            : <input onChange={(e) => handleChange(e, "type")} className="form_values" type="text" name="type" placeholder='Application Type' />
                    }

                </div>
                <div className="form_item">
                    <label >Source Code</label>

                    {
                        editMode ?
                            <input onChange={(e) => handleEditChange("sourceCode", e.target.value)} className="form_values" type="text" name="sourceCode" placeholder='Project Repo url' value={theCurrentProject.sourceCode} />
                            : <input onChange={(e) => handleChange(e, "sourceCode")} className="form_values" type="text" name="sourceCode" placeholder='Project Repo url' />
                    }
                </div>
                <div className="form_item">
                    <label >Website Url</label>
                    {
                        editMode ?
                            <input onChange={(e) => handleEditChange("url", e.target.value)} className="form_values" type="text" name="url" placeholder='Website  url' value={theCurrentProject.url} />
                            : <input onChange={(e) => handleChange(e, "url")} className="form_values" type="text" name="url" placeholder='Website  url' />
                    }

                </div>
                <div className='form_item'>
                    <label >About Application</label>
                    {
                        editMode ? <textarea onChange={(e) => handleEditChange("    ", e.target.value)} className="form_values" name="desc" cols="50" rows="4" placeholder='About application' value={theCurrentProject.desc}></textarea> :
                            <textarea onChange={(e) => handleChange(e, "desc")} className="form_values" name="desc" cols="50" rows="4" placeholder='About application'></textarea>

                    }
                </div>
                <div className='form_item'>
                    <label >Dark Mode Feature</label>
                    <div style={{ textAlign: "start", flex: 8 }}>
                        {
                            editMode ? <input type="checkbox" name="darkMode" onChange={(event) => handleEditChange("darkMode", event.target?.checked.toString())} /> :
                                <input type="checkbox" name="darkMode" onChange={(e) => handleChange(e, "darkMode")} />
                        }
                    </div>
                </div>
                <div className='form_item'>
                    <label> Application Platform</label>
                    {
                        editMode ? <Select onChange={(e) => handleEditChange("platForm", e.value)} value={platFormValue} className="form_values" options={[{ label: "Web Development", value: "Web Development" }, { label: "App Development", value: "App Development" }]} /> : <select onChange={(e) => handleChange(e, "platForm")} className="form_values" name="platForm" >
                            <option value="Web Application"> Web Application</option>
                            <option value="Mobile Application">Mobile Application</option>
                        </select>
                    }
                </div>
                <div className='form_item'>
                    <label >Tools Used</label>
                    {
                        editMode ? <Select className="form_values" onChange={(e) => { ChangeUsedToolsVal("usedTools", e); ChangeUsedToolsVal() }} value={useToolsValues} isMulti options={renderToolsUsedOptions} />
                            : <select onChange={(e) => handleChange(e, "usedTools")} name={"usedTools"} className="form_values" multiple >
                                {renderToolsUsedOptions}
                            </select>
                    }
                </div>
                <div className='feature_box'>
                    <div className="currentFeatures">
                        <label> Application Features</label>
                        <div className="feature_item">

                            {

                                editMode ? theCurrentProject?.currentFeatures?.map((item, index) => (
                                    <div style={{ width: "100%", position: 'relative' }}>
                                        <button onClick={() => removeFeaturesEdit("currentFeatures", index)} className='featuresitem_del_btn'> - </button>
                                        <textarea style={{ width: "100%" }} onChange={(e) => editFeaturesEdit("currentFeatures", e.target.value, index)} value={item} name="currentFeature" id={index} cols="20" rows="2" placeholder='Application Feature'>{item}</textarea>
                                    </div>
                                )) :

                                    curr_featureCount.map((count, index) => (
                                        <div style={{ width: "100%", position: 'relative' }}>
                                            <button onClick={() => remove("currentFeatures", count.id)} className='featuresitem_del_btn'> - </button>
                                            <textarea style={{ width: "100%" }} onChange={(e) => theChange(e, "currentFeatures", count.id)} value={count.value} name="currentFeature" id={index} cols="20" rows="2" placeholder='Application Feature'></textarea>
                                        </div>
                                    ))
                            }
                            {
                                editMode ? <button onClick={() => addMoreEdit("currentFeatures")}>Add More</button> : <button onClick={() => addMore("currentFeatures")}>Add More</button>
                            }

                        </div>
                    </div>
                    <div className="upComming_feature">
                        <label> Upcoming Application Features</label>
                        <div className="feature_item">
                            {
                                editMode ? theCurrentProject?.upcomingFeatures?.map((item, index) => (
                                    <div style={{ width: "100%", position: 'relative' }}>
                                        <button onClick={() => removeFeaturesEdit("upcomingFeatures", index)} className='featuresitem_del_btn'> - </button>
                                        <textarea style={{ width: "100%" }} onChange={(e) => editFeaturesEdit("upcomingFeatures", e.target.value, index)} name="upcomingFeatures" id={index} cols="20" rows="2" placeholder='Application Feature' value={item}> </textarea>
                                    </div>
                                )) :
                                    up_FeatureCount.map((count, index) => (
                                        <div style={{ width: "100%", position: 'relative' }}>
                                            <button onClick={() => remove("upcomingFeatures", count)} className='featuresitem_del_btn'> - </button>
                                            <textarea style={{ width: "100%" }} onChange={(e) => theChange(e, "upcomingFeatures", index)} name="upcomingFeature" id={index} cols="20" rows="2" placeholder='Application Feature'></textarea>
                                        </div>
                                    ))
                            }
                            {
                                editMode ? <button onClick={() => addMoreEdit("upcomingFeatures")}>Add More</button> : <button onClick={() => addMore("upcomingFeatures")}>Add More</button>
                            }
                        </div>
                    </div>
                </div>
                <div className="project_pages form_item">
                    <label > Project Pages</label>
                    <div className="projectPages_container">
                        {
                            editMode ? theCurrentProject.pages.map((page, index) => (
                                <PagesUploadForm removeEdit={removePagesEdit} handlePagesEdit={handlePagesEdit} key={index} page={page} theCurrentProject={theCurrentProject} index={index} theChange={theChange} editMode={editMode} remove={remove} />
                            )) :
                                pagesCount.map((count, index) => (
                                    <PagesUploadForm key={index} index={index} theChange={theChange} remove={remove} />
                                ))
                        }
                        {
                            editMode ? <button onClick={() => addMoreEdit("pages")}>Add More</button> : <button onClick={() => addMore("pages")}>Add More</button>
                        }
                    </div>

                </div>

            </div>
            {

                editMode ?
                    <button onClick={() => handleUpdate(theCurrentProject)}>
                        UPDATE
                    </button> : <button onClick={() => handleUploadProject(projectState)}>
                        ADD PROJECT
                    </button>
            }
        </div >

    )
}
const ProjectFormMemoized = React.memo(ProjectForm)

export default ProjectFormMemoized