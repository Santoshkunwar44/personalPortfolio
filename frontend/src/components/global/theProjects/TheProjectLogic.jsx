import React, { useEffect, useState } from 'react'
import { findProjects, getProjectsWithQuery } from '../../../utility/urls/project'
import TheProjects from './TheProjects'

const TheProjectLogic = ({ title, type, filteredItem, toolsPage }) => {
    const [theProjectItem, setTheProjectItem] = useState([])
    const [theProjectType, setTheProjectType] = useState("")



    useEffect(() => {
        FetchProject()
    }, [type])

    const FetchProject = async () => {
        try {
            const { data } = await getProjectsWithQuery(type)
            setTheProjectItem(data.message)
        } catch (error) {
            console.log(error)
        }
    }


    return <TheProjects toolsPage={toolsPage} title={title} item={filteredItem ? filteredItem : theProjectItem} />
}

export default TheProjectLogic