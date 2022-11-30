import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useUploadImage from '../../../hooks/useUploadImage'
import { addProject, updateProject } from '../../../utility/urls/project'
import Progress from './Progress'

const ProgressLogic_project = ({
    data, projectState, setStart, imageItem
}) => {
    const [imagesArr, setImagesArr] = useState(null)
    const [comleted, setCompleted] = useState(false)
    const {
        urls,
        taskRef,
        progress,
        success,
        error } = useUploadImage(imageItem, "project")


    useEffect(() => {
        console.log(" progress logic initialized", imageItem)

    }, [])


    useEffect(() => {
        if (success) {
            dataManage(urls)
        }
    }, [success])


    const dataManage = (newUrls) => {

        let projectStatePages = [...projectState.pages]
        for (let i = 0; i < newUrls.length; i++) {
            projectStatePages.forEach(project => {
                if (project.src?.name) {
                    if (newUrls[i].name === project.src.name + project.name) {
                        project.src = newUrls[i].url
                    }
                }
            })
        }
        let projectStateClone = { ...projectState }
        projectStateClone.pages = projectStatePages

        console.log("finale ", urls, projectStatePages, projectStateClone)
        addProjectFunc(projectStateClone)

    }





    // useEffect(() => {





    const addProjectFunc = async (projectState) => {

        console.log("flight ", projectState)

        try {
            // post method to /project               endpoint
            if (projectState.editMode) {

                delete projectState.editMode


                const { data } = await updateProject(projectState)
                console.log(data)
            } else {

                const { data } = await addProject(projectState)
                console.log(data)
                setStart(false)
            }
        } catch (error) {
            setStart(false)
            console.log(error)
        }

    }

    return <Progress progress={33} />
}

const MemoizedProgressLogicProject = React.memo(ProgressLogic_project)
export default MemoizedProgressLogicProject