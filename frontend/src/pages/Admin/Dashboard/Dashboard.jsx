import "./dashboard.css"
import { Link, Outlet } from "react-router-dom"


const AdminDashboard = () => {





    return (
        <>
            <div className="admin_dashboard">
                <div className="sidebar">
                    <Link to="project/new" ><span>   Add  Project</span>   </Link>
                    <Link to="technology/new" > <span>   Add Technology   </span> </Link>
                    <Link to="technology" > <span>   Projects   </span> </Link>

                </div>
                <div className="admin_content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard