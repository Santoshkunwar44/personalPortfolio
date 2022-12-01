import { Routes, Route, useLocation } from "react-router-dom"
import Technology from "../../../pages/technology/Technology"
import Contact from '../../../pages/contact/Contact';
import Authenticate from '../../../pages/authenticate/Authenticate';
import SignUp from '../../../pages/signUp/SignUp';
import ResetPage from '../../../pages/passwordReset/ResetPage';
import Confirmation from '../../../pages/passwordReset/Confirmation';
import AdminProjects from '../admin_projects/AdminProjects';
import Tools from '../../../pages/Admin/tools/Tools';
import ProjectLogic from '../../../pages/Admin/project/ProjectLogic';
import AdminDashboard from '../../../pages/Admin/Dashboard/Dashboard';
import CreateNewPassword from '../../../pages/passwordReset/CreateNewPassword';
import DashboardContent from '../admin_dashboard/DashboardContent';
import ProjectDefault from '../projectPage/projectDefault/ProjectDefault';
import AppAlone from '../../../pages/single_project/AppAlone';
import ToolsPage from '../toolsPage/ToolsPage';
import ProjectAdminDash from '../../../pages/Project/Project_page';
import { AnimatePresence } from "framer-motion"
import Home from "../../../pages/home/Home";

const AnimatedRoute = () => {



    const location = useLocation()

    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/authenticate' element={<Authenticate />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reset_page" element={<ResetPage />} />
                <Route path="/verify_otp" element={<Confirmation />} />
                <Route path="/create_new_password" element={<CreateNewPassword />} />
                <Route path="/admin" element={<AdminDashboard />}>
                    <Route path="project/new" element={<ProjectLogic />} />
                    <Route path="technology/new" element={<Tools />} />
                    <Route path="technology" element={<AdminProjects />} />
                    <Route index element={<DashboardContent />} />
                </Route>
                <Route path="/projects" element={<ProjectAdminDash />}>
                    <Route path=":toolsProject" element={<ToolsPage />} />
                    <Route path='single/:projectId' element={<AppAlone />} />
                    <Route index element={<ProjectDefault />} />
                </Route>
            </Routes>

        </AnimatePresence>
    )
}

export default AnimatedRoute