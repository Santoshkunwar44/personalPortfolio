import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverBody,
} from '@chakra-ui/react'
import { Suspense, useRef } from 'react'
import "./popover.css"
const GuidePop = ({ children, toggle }) => {


    const popRef = useRef()


    return (
        <Suspense>

            <Popover isOpen={toggle} defaultIsOpen closeOnBlur={true} autoFocus={false} placement='left-end' initialFocusRef={null}>
                <PopoverContent height={80} borderRadius={"15px 60px 0px 20px"} width={340} background={"var(--gradient_bg_light)"} color={"black"}>
                    <PopoverArrow />
                    {/* <PopoverCloseButton /> */}



                    <PopoverBody position={'relative'} display="grid" placeItems={"center"}>
                        <div style={{ position: 'absolute', top: "-140px", left: "-70px" }}>


                            <img draggable={"false"} style={{ transform: "scaleX(-1)" }} width={"175px"} src="/guide.png" alt="guidePng" />
                        </div>
                        <div style={{ paddingTop: "1.7rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <h3 style={{ color: "white", fontWeight: "400", fontSize: "14px", fontFamily: "var(--poppins)" }}> Hello !! Click here to Chat with Santosh !</h3>
                        </div>
                    </PopoverBody>
                </PopoverContent>
                <PopoverTrigger>
                    {children}
                </PopoverTrigger>
            </Popover >
        </Suspense>
    )
}

export default GuidePop