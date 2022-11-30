import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import AppAlone from './pages/single_project/AppAlone';
import ActionBtn from './components/local/speedDail/SpeedDialss';
import AdminDashboard from './pages/Admin/Dashboard/Dashboard';
import Tools from './pages/Admin/tools/Tools';
import ProjectLogic from './pages/Admin/project/ProjectLogic';
import Technology from './pages/technology/Technology';
import DashboardContent from './components/local/admin_dashboard/DashboardContent';
import AdminProjects from './components/local/admin_projects/AdminProjects';
import ProjectAdminDash from './pages/Project/Project_page';
import ProjectDefault from './components/local/projectPage/projectDefault/ProjectDefault';
import Contact from './pages/contact/Contact';
import ToolsPage from './components/local/toolsPage/ToolsPage';
import Authenticate from './pages/authenticate/Authenticate';
import SignUp from './pages/signUp/SignUp';
import useFetchLoggedInUser from './hooks/useFetchLoggedInUser';
import { useSelector } from "react-redux"
import LoginModal from './components/global/modal/LoginModal/LoginModal';
import ResetPage from './pages/passwordReset/ResetPage';
import Confirmation from './pages/passwordReset/Confirmation';
import CreateNewPassword from './pages/passwordReset/CreateNewPassword';
function App() {

  const { user, error } = useFetchLoggedInUser()
  const { showLoginModal } = useSelector((state) => state.utilityReducer)


  return (
    <div className="App">
      <div className='blur blur1'>
      </div>
      <div className='blur blur2'>
      </div>
      <ActionBtn />
      {
        showLoginModal && <LoginModal />
      }


      <Routes>
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

    </div>
  );
}

export default App;




const SingleProject = () => {
  return (
    <>
      <h3>Single project</h3>
    </>
  )
}

