import "./technologies.css"
import { useState, useEffect } from "react"
import { getTools } from "../../../utility/urls/tools"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLocation } from "react-router-dom"


const Technologies = () => {
    const [currentTab, setTab] = useState("All")
    const [currentTools, setCurrentTools] = useState([])
    const [allTools, setAllTools] = useState([])
    const location = useLocation().pathname;


    const animation = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.4
    })

    useEffect(() => {

        if (inView) {
            animation.start({
                x: "0px",
                opacity: 1,
                scale: 1,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                    stiffness: 100,
                }
            })
        }
        if (!inView) {
            animation.start({
                x: "-300px",
                opacity: 0,
                scale: 0.8,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                    stiffness: 100,
                }
            })
        }

    }, [inView])


    const handleChangeTab = (type) => {
        setTab(type)
    }

    const getToolsFunc = async () => {
        try {
            const { data } = await getTools()
            setAllTools(data.message)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getToolsFunc()
    }, [])

    useEffect(() => {
        if (currentTab === "All") {
            return setCurrentTools([...allTools])
        }
        setCurrentTools(allTools?.filter((tool) => tool.type === currentTab))
    }, [currentTab, allTools])


    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animation}
            transition={{ duration: 4, type: "spring", stiffness: 100, bounce: 0.3 }}
            ref={ref}
            className='technologies mini-container'
            id="technologies">
            {

                location !== "/technology" && <div className="technologies_topbg">
                    <img src="https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg" alt="" />

                </div>

            }

            <div className='technologies_innerbox'>
                <div className="tools_header">
                    <h3 className="section_title">Tools I  Mastered</h3>
                    <div className="technologies_tab_list">
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                            }}
                            transition={{ type: "spring", duration: 0.1 }}
                            className={`technologies_tab_item ${currentTab === "All" ? "active_tool" : ""}`}
                            whileTap={{ scale: 0.7 }}
                            onClick={() => handleChangeTab("All")}
                        >
                            All
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.7 }}
                            whileHover={{
                                scale: 1.2,
                            }}
                            transition={{ type: "spring", duration: 0.1 }}
                            className={`technologies_tab_item ${currentTab === "Frontend" ? "active_tool" : ""}`}
                            onClick={() => handleChangeTab("Frontend")}>
                            Frontend tools
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.7 }}
                            whileHover={{
                                scale: 1.2,
                            }}
                            transition={{ type: "spring", duration: 0.1 }}
                            className={`technologies_tab_item ${currentTab === "Backend" ? "active_tool" : ""}`} onClick={() => handleChangeTab("Backend")}>
                            Backend tools
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.7 }}
                            whileHover={{
                                scale: 1.2,
                            }}
                            transition={{ type: "spring", duration: 0.1 }}
                            className={`technologies_tab_item ${currentTab === "Database" ? "active_tool" : ""}`} onClick={() => handleChangeTab("Database")}>
                            Database
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.7 }}
                            whileHover={{
                                scale: 1.2,
                            }}
                            transition={{ type: "spring", duration: 0.1 }}
                            className={`technologies_tab_item ${currentTab === "Web Tools" ? "active_tool" : ""}`} onClick={() => handleChangeTab("Web Tools")}>
                            Web Tools
                        </motion.div>
                    </div>


                </div>
                <div className="technologies_list">
                    {
                        currentTools?.map((tool, index) => (
                            <motion.a
                                className="link_item"
                                initial={{ y: "-50px", scale: 0.9 }}
                                animate={{ y: "0px", scale: 1 }}
                                key={index} href={tool?.url} target={"_blank"}>
                                <div className="technology_item" >
                                    <img draggable={false} className="technology_item_img" src={tool.src} alt={tool.name} />


                                </div>
                            </motion.a>
                        ))
                    }


                </div>
            </div>
        </motion.section>
    )
}

export default Technologies