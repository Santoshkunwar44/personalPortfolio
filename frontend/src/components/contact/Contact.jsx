// import {  } from "react"
import "./contact.css"
import { motion, useAnimation } from "framer-motion"

import EastIcon from '@mui/icons-material/East';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const Contact = () => {

    const navigate = useNavigate()
    const animation = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.2
    })


    useEffect(() => {

        if (inView) {
            animation.start({
                x: "0px",
                opacity: 1,
                scale: 1,

            })
        }
        if (!inView) {
            animation.start({
                x: "300px",
                opacity: 0,
                scale: 0.8,

            })
        }

    }, [inView])



    return (
        <motion.div
            ref={ref}
            initial={{ x: "300px", scale: 0.6, opacity: 0 }}
            animate={animation}
            className={"contactComponent"}
            id="contactComponent">

            <div className="contactBg">
                <img src="https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg" alt="" />

            </div>
            <div className={"contactInfoDetail"}>
                <motion.h2

                    ref={ref}
                    initial={{ x: "300px", scale: 0.6, opacity: 0 }}
                    animate={animation}
                    transition={{ delay: 0.4, type: "spring" }}
                >
                    Let's Work Together
                </motion.h2>
                <motion.p
                    ref={ref}
                    initial={{ x: "300px", scale: 0.6, opacity: 0 }}
                    animate={animation}
                    transition={{ delay: 0.6, type: "spring" }}

                >Get in touch via email form or online messaging system of this website.I may help you to grow your busniess with well-functioned Applicaitons</motion.p>
                <motion.button
                    onClick={() => navigate("/contact")}
                    ref={ref}
                    initial={{ x: "300px", scale: 0.8, opacity: 0 }}
                    animate={animation}
                    transition={{ delay: 0.6, type: "spring" }}

                    className="contactCom_btn">  <span>Contact Me</span>  <EastIcon className="contactForm_btnIcon" /> </motion.button>
                <motion.span
                    ref={ref}
                    initial={{ x: "300px", scale: 0.9, opacity: 0 }}
                    animate={animation}
                    transition={{ delay: 0.7, type: "spring" }}


                    className="orTExtContactCom">Or</motion.span>
                <motion.div className="instanctMsgbox"
                    ref={ref}
                    initial={{ x: "300px", scale: 0.9, opacity: 0 }}
                    animate={animation}
                    transition={{ delay: 0.7, type: "spring" }}

                >

                    <img className="contactCom_instantMsg" src="data:image/png;base64,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" />
                    <span>Instant Message</span>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Contact