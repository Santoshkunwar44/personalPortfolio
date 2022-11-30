import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import { motion } from "framer-motion"

import Draggable from 'react-draggable';
import { SpeedDialAction } from "@mui/material"
import "./action.css"
import { ChatBubbleOutlineRounded, DarkMode, CatchingPokemonOutlined } from '@mui/icons-material';
import Pops from '../../global/popover/Popover';
import GuidePop from '../../global/popover/Initial';



export default function ActionBtn() {


    const speedDialRef = React.useRef()
    const [toggle, setToggle] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setToggle(false)
        }, 5000);
    }, [])

    const actions = [
        { icon: <Pops> <ChatBubbleOutlineRounded className='chatBtn' /></Pops>, name: 'Chats' },
        { icon: <DarkMode />, name: 'DarkMode ' },
    ];


    return (
        <>
            <Draggable>

                <motion.div

                    initial={{ x: "200px", opacity: 0 }}
                    animate={{ x: "0px", opacity: 1 }}
                    transition={{ duration: 0.8, delay: 3 }}
                    style={{ position: 'fixed', bottom: "140px", right: 16, zIndex: 9999 }}
                >
                    <GuidePop toggle={toggle}>
                        <SpeedDial
                            ref={speedDialRef}
                            ariaLabel="SpeedDial basic example"
                            icon={<CatchingPokemonOutlined />}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction

                                    className='darkModeBtn'
                                    sx={{ width: "50px", height: "50px", padding: "10px" }}
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                />
                            ))}
                        </SpeedDial>
                    </GuidePop>
                </motion.div>
            </Draggable>

        </>
    );
}
