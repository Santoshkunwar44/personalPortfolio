import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/local/navbar/Navbar"
import Sidebar from "../../components/local/projectPage/sidebar/Sidebar"
import { motion } from "framer-motion"
import "./projectAdminDash.css"
const ProjectAdminDash = () => {

    const location = useLocation().pathname.split("/")
    const [showSidebar, setShowSidebar] = useState(true)
    const [sidebarExpand, setSidebarExpand] = useState(false)

    useEffect(() => {
        if (location.includes("single")) {
            setShowSidebar(false)
        }
    }, [location])
    return (
        <>
            <Navbar />
            <motion.div
                initial={{
                    opacity: 0.7,
                    x: "-700px",
                    scale: 0.7
                }}
                animate={{
                    opacity: 1,
                    x: "0",
                    scale: 1
                }}

                transition={{ duration: 0.41 }}
                className="dashboardContainer">
                {
                    showSidebar ? <Sidebar toggleSidbarExpand={() => setSidebarExpand(!sidebarExpand)} sidebarExpand={sidebarExpand} expandSidebarFunction={() => { setSidebarExpand(true); console.log("clicked") }} /> : null
                }

                <div className={`projectRight ${sidebarExpand ? "expand" : ''}`}>
                    <Outlet />
                </div>

            </motion.div>
        </>
    )
}
export default ProjectAdminDash