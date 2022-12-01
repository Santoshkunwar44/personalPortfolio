import './App.css';
import ActionBtn from './components/local/speedDail/SpeedDialss';
import useFetchLoggedInUser from './hooks/useFetchLoggedInUser';
import { useSelector } from "react-redux"
import LoginModal from './components/global/modal/LoginModal/LoginModal';
import AnimatedRoute from './components/local/AnimatedRoute/AnimatedRoute';
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
      <AnimatedRoute />

    </div>
  );
}

export default App;




