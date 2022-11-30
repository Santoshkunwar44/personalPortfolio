import { useEffect, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../../components/local/navbar/Navbar"
import Sidebar from "../../components/local/projectPage/sidebar/Sidebar"
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
            <div className="dashboardContainer">
                {
                    showSidebar ? <Sidebar toggleSidbarExpand={() => setSidebarExpand(!sidebarExpand)} sidebarExpand={sidebarExpand} expandSidebarFunction={() => { setSidebarExpand(true); console.log("clicked") }} /> : null
                }

                <div className={`projectRight ${sidebarExpand ? "expand" : ''}`}>
                    <Outlet />
                </div>

            </div>
        </>
    )
}
export default ProjectAdminDash