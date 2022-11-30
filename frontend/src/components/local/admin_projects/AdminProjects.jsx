import React, { useEffect, useState } from 'react'
import { getProjects } from '../../../utility/urls/project'
import Project from '../project/Project'

const AdminProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        getAllProjects()
    }, [])

    const getAllProjects = async () => {

        try {
            const { data } = await getProjects()
            setProjects(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {
                    projects.map(project => <Project key={project?._id} item={project} />)
                }
            </div>
        </>
    )
}

export default AdminProjects