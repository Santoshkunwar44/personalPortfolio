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
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./loginModal.css"
function LoginModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const handleNavigate = (type) => {
        navigate(`/${type}`)
    }

    const handleLoginWith = () => {
        window.open("http://localhost:8000/api/passport/google", "_self")
        onClose()
    }



    useEffect(() => {
        onOpen()
    }, [])

    return (
        <>

            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay width={"100vw"} height={"100vh"} />
                <ModalContent position={"relative"} zIndex={999} borderRadius={"10px"} padding={"2rem"} margin={"0em auto"} marginTop={"6em"} width={"40%"} backgroundColor={"#ffffff"} boxShadow={"0 0 4px 4px gainsboro"} >
                    <ModalHeader textAlign={"center"}> <h3 className='modal_header_text'>CONNECT WITH SANTOSH PORTBOOK</h3> </ModalHeader>
                    <ModalBody background={"purple.100"}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", width: "60%", justifyContent: "center", alignItems: "center", margin: "10px auto" }}>

                            <Button className='modalButtons' onClick={() => { handleNavigate("authenticate"); onClose() }}>LOGIN </Button>
                            <Button className='modalButtons ' onClick={() => { handleNavigate("signup"); onClose() }}>SIGN IN  </Button>
                        </div>
                        <div className="dividerBox">
                            <div className="divider"></div> <span className="or_text">Or</span>
                            <div className="divider"></div>
                        </div>
                        <div className="loginWithBox">

                            <div className="loginWith">
                                <img src="https://img.icons8.com/color/48/null/facebook.png" />
                                <span>
                                    Login with Facebook
                                </span>
                            </div>
                            <div className="loginWith" onClick={() => handleLoginWith("google")}>
                                <img src="https://img.icons8.com/color/48/null/google-logo.png" />
                                <span>
                                    Login with Google
                                </span>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default LoginModal