import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getChatApi } from '../../../utility/urls/chat'
import { addMessageApi, addNewMessageApi, getMessageApi } from '../../../utility/urls/message'
import "./popover.css"
const Pops = ({ children }) => {



    const user = useSelector((state) => state.authReducer.user)
    const [message, setMessage] = useState("")
    const [chatId, setChatid] = useState(null)
    const [chatMessage, setChatMessage] = useState([])
    const dispatch = useDispatch()


    console.log("the current user", user)
    useEffect(() => {
        getChat()
    }, [user?._id])

    useEffect(() => {

        fetchMessages()
    }, [chatId])

    // get the chat id 
    const getChat = async () => {
        try {
            try {
                const { data } = await getChatApi(user?._id)
                console.log(data)
                if (data.success) {
                    console.log(data.message)
                    setChatid(data.message?._id)
                } else {
                    setChatid(null)
                }
            } catch (error) {

            }
        } catch (error) {
            console.log(error)
        }
    }

    const sendMessageFunc = async () => {
        try {
            let newMessage;
            if (chatId) {
                const theData = {
                    content: message,
                    senderId: user?._id,
                    chatId
                }
                const { data } = await addMessageApi(chatId, theData)
                newMessage = data.message
                console.log(data)

            } else {
                const theData = {

                    chat: {
                        users: [user?._id, "634d670e03e8b1854ccc4ea7"]
                    },

                    message: {
                        content: message,
                        senderId: user?._id,
                    }
                }

                const { data } = await addNewMessageApi(theData)
                newMessage = data.message
                console.log(data)

            }


            setMessage("")
            setChatMessage((prev) => ([
                ...prev, newMessage
            ]))


        } catch (error) {
            console.log(error)
        }

    }


    // handle key down

    const handleKeyDown = (e) => {
        console.log(e.key)
        let userPressedKey = e.key


        if (userPressedKey === "Enter") {
            sendMessageFunc()
        }

    }


    const fetchMessages = async () => {

        if (!chatId) return

        try {

            const { data } = await getMessageApi(chatId)
            setChatMessage(data.message)


        } catch (error) {
            console.log(error)
        }
    }


    const handleOpenModal = () => {
        dispatch({ type: "showLoginModal" })
    }

    return (
        <Popover placement='left'>
            <PopoverTrigger>
                <span style={{ margin: "0", padding: "0" }} >{children}</span>
            </PopoverTrigger>
            <PopoverContent borderRadius={"30px"} overflow={"hidden"} boxShadow={"0 0 4px 4px gainsboro"} height={500} width={360} backgroundColor={"white"} color={"black"}>
                {/* <PopoverArrow /> */}
                {/* <PopoverCloseButton /> */}

                <PopoverHeader >
                    <div className='popoverHeader'>
                        <img className='popOver_userImg' draggable={false} src="/assets/images/user.jpg" alt="user_photo" />
                        <div>
                            <h2>Santosh Kunwar </h2>
                        </div>
                    </div>
                </PopoverHeader>

                <PopoverBody>
                    <div className='chatBody'>
                        {
                            chatMessage?.length > 0 ? <div className='msg_box'>
                                {
                                    chatMessage.map((msg) => (
                                        <div className={`message ${msg.senderId._id === user._id && "own"}`}>
                                            {msg.content}
                                        </div>
                                    ))
                                }
                            </div> :
                                <div className="initialText">
                                    <h3 >Start Conversation</h3>
                                    <button className='sayHiButton'>Say Hii !!</button>
                                </div>
                        }
                        {
                            user ? <input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} type="text" name="" id="" placeholder='Leave message ...' /> : <span onClick={handleOpenModal}>Login to proceed</span>
                        }

                    </div>
                </PopoverBody>
            </PopoverContent>
        </Popover >
    )
}

export default Pops