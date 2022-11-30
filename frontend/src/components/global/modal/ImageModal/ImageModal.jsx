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
import { useNavigate } from 'react-router-dom'
function ImageModal({ children, currentImage, handleCloseExpand }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()

    const handleNavigate = (type) => {
        navigate(`/${type}`)
    }

    const handleLoginWith = () => {
        window.open("http://localhost:8000/api/passport/google", "_self")
    }


    const handleClose = () => {
        onClose()
        handleCloseExpand()
    }


    return (
        <>

            <span onClick={onOpen}>
                {children}
            </span>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay width={"100vw"} height={"100vh"} />
                <ModalContent borderRadius={"10px"} padding={"0rem"} margin={"0em auto"} marginTop={"2em"} overflow={"scroll"} maxHeight={"100vh"} width={"70%"} backgroundColor={"#ffffff"} boxShadow={"0 0 4px 4px gainsboro"} >
                    <ModalBody background={"purple.100"}>
                        <img width={'100%'} height={"100%"} style={{ objectFit: "fill" }} src={currentImage} alt="image" />
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}


export default ImageModal