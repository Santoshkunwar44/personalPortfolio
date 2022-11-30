import React, { useEffect, useState } from 'react'
import "./sideNav.css"
import { Link } from "react-scroll"
const Side = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    const handleScroll = () => {
        let scrollTop = window.scrollY
        if (scrollTop > 680) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    return (
        <div className={`${show ? "show" : ""} side_nav`}>
            <div>
                <Link to={'technologies'} smooth={true} duration={1} offset={-100}>
                    <div className='sideItem'>
                        <img src="https://img.icons8.com/color/48/null/javascript--v1.png" />
                        <span>Technologies</span>
                    </div>
                </Link>
                <div className="vrLine"></div>
                <Link to={'aboutMe'} smooth={true} duration={1} offset={-100}>
                    <div className='sideItem'>

                        <img src="data:image/png;base64,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"></img>
                        <span>About Me</span>
                    </div>
                </Link>
                <div className="vrLine"></div>
                {/* <img src="https://img.icons8.com/color/96/null/javascript--v1.png" /> */}
                <Link to={'projects'} smooth={true} duration={1} offset={-100}>
                    <div className='sideItem'>
                        <img src="data:image/png;base64,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"></img>
                        <span>Projects</span>
                    </div>
                </Link>
                <div className="vrLine"></div>
                <Link to={'reviews'} smooth={true} duration={1} offset={-100}>
                    <div className='sideItem'>

                        <img src="data:image/png;base64,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"></img>
                        <span>My Works </span>
                    </div>
                </Link>
                <div className="vrLine"></div>
                <Link to={'contactComponent'} smooth={true} duration={1} offset={-100}>
                    <div className='sideItem'>

                        <img src="https://img.icons8.com/fluency/48/null/gmail-new.png" />
                        <span>Email</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Side