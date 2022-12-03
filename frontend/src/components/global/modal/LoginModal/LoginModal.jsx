import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { FaUnlock } from "react-icons/fa"
import { FaSignInAlt } from "react-icons/fa"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./loginModal.css"
import { useDispatch } from 'react-redux'
import { setHideLoginModa } from '../../../../redux/action/utilityAction'
function LoginModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = (type) => {
        navigate(`/${type}`)
    }

    const handleLoginWith = () => {
        window.open("http://localhost:8000/api/passport/google", "_self")
        handleClose()
    }

    const handleClose = () => {
        dispatch(setHideLoginModa())
        onClose()
    }

    useEffect(() => {
        onOpen()
    }, [])

    return (
        <>

            <Modal
                isOpen={isOpen}
                onBlur={handleClose}
                onClose={handleClose} >
                <ModalOverlay width={"100vw"} height={"100vh"} />
                <ModalContent position={"relative"} zIndex={999} borderRadius={"10px"} padding={"0rem"} margin={"0em auto"} marginTop={"6em"} width={"40%"} backgroundColor={"#ffffff"} boxShadow={"0 0 4px 4px gainsboro"} >
                    <div className='loginModalHeaderBox' style={{ height: "70px" }}>
                        <div className='loginModalLogoBox'>
                            <img src='/assets/images/logoMain.png' alt="brainySantoshLogo" />
                        </div>
                        <div>
                            <h1>Unite With us  </h1>
                        </div>
                    </div>
                    <ModalBody background={"purple.100"}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", width: "60%", justifyContent: "center", alignItems: "center", margin: "10px auto" }}>

                            <Button className='modalButtons' onClick={() => { handleNavigate("authenticate"); onClose() }}> <FaUnlock /> <span>LOGIN</span>  </Button>
                            <Button className='modalButtons' onClick={() => { handleNavigate("signup"); onClose() }}>  <FaSignInAlt /> <span>SIGN UP</span>   </Button>
                        </div>
                        <div className="dividerBox">
                            <div className="divider"></div> <span className="or_text">Or</span>
                            <div className="divider"></div>
                        </div>
                        <div className="loginWithBox">
                            <div className='loginWithWrapper'>

                                <div className="loginWith">
                                    <img src="https://img.icons8.com/color/48/null/facebook.png" />
                                    <span className='loginWithText'>
                                        Login with Facebook
                                    </span>
                                </div>
                                <div className="loginWith" onClick={() => handleLoginWith("google")}>
                                    <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                                    <span className='loginWithText'>
                                        Login with Google
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter position={"absolute"} top={0} right={0}>
                        <Button background={"orange"} color={"white"} colorScheme='blue' mr={3} onClick={handleClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default LoginModal