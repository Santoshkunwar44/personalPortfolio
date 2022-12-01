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
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
function ImageModal({ children, currentImage, handleCloseExpand, setIsHoverClose }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    const imgRef = useRef("sff")


    const [imageRatio, setImageRatio] = useState({
        width: null,
        height: null
    })

    console.log(imgRef)


    // useEffect(() => {
    //     console.log(imgRef)
    //     setImageRatio({
    //         width: imgRef.naturalWidth,
    //         height: imgRef.naturalHeight,
    //     })
    // }, [imgRef, currentImage])

    const handleClose = () => {
        onClose()
        handleCloseExpand()
        setIsHoverClose()
    }


    return (
        <>

            <span onClick={onOpen}>
                {children}
            </span>
            <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay background={"rgba(0,0,0,0.7)"} width={"100vw"} height={"100vh"} />
                <ModalContent borderRadius={"10px"} height={"88vh"} padding={"0rem"} margin={"0em auto"} marginTop={"6em"} overflow={"scroll"} display="grid" placeItems={"center"} heigth={"100%"} width={"70%"} backgroundColor={"#ffffff"} >
                    <ModalBody background={"purple.100"} display="grid" placeItems={"center"}>
                        {/* <img
                            width={'100%'}
                            height={"100%"}
                            style={{ objectFit: "conver" }}
                            src={currentImage}
                            ref={imgRef}
                            alt="image" /> */}
                        <img src={currentImage} style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            alt="" />
                    </ModalBody>


                </ModalContent>
            </Modal>
        </>
    )
}


export default ImageModal