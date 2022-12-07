import './App.css';
import ActionBtn from './components/local/speedDail/SpeedDialss';
import useFetchLoggedInUser from './hooks/useFetchLoggedInUser';
import { useSelector } from "react-redux"
import LoginModal from './components/global/modal/LoginModal/LoginModal';
import AnimatedRoute from './components/local/AnimatedRoute/AnimatedRoute';
import Side from './components/local/side/Side';
import Toast from './components/local/toast/Toast';
function App() {

  const { user, error } = useFetchLoggedInUser()
  const { showLoginModal } = useSelector((state) => state.utilityReducer)


  return (
    <div className="App">
      <div className='blur blur1'>
      </div>
      <div className='blur blur2'>
      </div>
      <Side />
      <Toast />
      <ActionBtn />
      {
        showLoginModal && <LoginModal />
      }
      <AnimatedRoute />

    </div>
  );
}

export default App;




