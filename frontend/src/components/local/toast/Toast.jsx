import { ChakraProvider, useToast } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRemoveToastInfo } from '../../../redux/action/utilityAction';
export default function Toast() {
    const toast = useToast()

    const { title, desc, type } = useSelector((state) => state.utilityReducer.toastInfo);
    const dispatch = useDispatch()


    console.log(title, desc)

    useEffect(() => {
        if (!title) return
        handleShowToast()
    }, [title])


    const handleShowToast = () => {

        toast({
            title,
            description: desc,
            status: type,
            duration: 5000,
            onCloseComplete: () => dispatch(setRemoveToastInfo()),
            isClosable: true,

            position: "top-right"
        }); console
            .log("clicking")

    }

    return (
        <ChakraProvider>

            {/* <Button
                onClick={handleShowToast}
            >
                Show Toast
            </Button> */}
        </ChakraProvider>
    )
}