import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProjectsWithQuery } from "../../../utility/urls/project"
import Project from "../project/Project"
import { motion, useAnimation } from "framer-motion"


import "./project_cat.css"
import { useInView } from "react-intersection-observer"
const Project_cat = () => {

    const [currentProject, setCurrentProject] = useState('Javascript')
    const [theProjects, setTheProjects] = useState([])
    const navigate = useNavigate()


    const { ref, inView } = useInView({
        threshold: 0.5
    })

    const animation = useAnimation()



    useEffect(() => {

        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                }
            })
        }
        if (!inView) {
            animation.start({
                x: 0,
                opacity: 0,
                transition: {
                    duration: 1,
                }
            })
        }

    }, [inView])




    const handleProject = async (type) => {
        setCurrentProject(type);

        try {
            const { data } = await getProjectsWithQuery(type)
            setTheProjects(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        handleProject("Javascript")

    }, [])








    return (
        <motion.section
            initial={{ opacity: 0, x: 0 }}
            animate={animation}
            ref={ref}
            className='project_cat section mini-container'>

            <div className='project_cat_header'>
                <h3 className="section_title"> Applications with different technologies</h3>
            </div>
            <div>
                <div className="project_cat_header_list">
                    {
                        projectCat.map(item => (
                            <motion.div
                                whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 1 },
                                }}
                                whileTap={{ scale: 0.9 }}
                                key={item}

                                className={`project_cat_list_item ${currentProject === item ? "activeCat" : ""}`} onClick={() => handleProject(item)}>
                                {item}
                            </motion.div>
                        ))
                    }
                </div>
                <div className='project_cat_container'>

                    {
                        theProjects.slice(0, 4).map((item) => (
                            <Project item={item} key={item.name} mini={true} />
                        ))
                    }

                </div>
                {/* <button className="project_cat_more_btn" onClick={() => navigate(`/projects/${currentProject}`)}>
                    View More
                </button> */}
            </div>

        </motion.section >
    )
}

export default Project_cat

const projectCat = [
    "Javascript",
    "React Js",
    "React Js_Node js",
    "Python_Django"
]