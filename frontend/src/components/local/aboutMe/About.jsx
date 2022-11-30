import "./aboutMe.css"
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const About = () => {

    const animation = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()

    const { ref, inView } = useInView({
        threshold: 0.4
    })

    useEffect(() => {

        if (inView) {
            animation.start({
                x: "0px",
                opacity: 1,
                scale: 1,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                    stiffness: 100,
                }
            })

            animation2.start({
                x: "0",
                opacity: 1,
                scale: 1,

            })
            animation3.start({
                x: 0,
                opacity: 1,
                scale: 1
            })

        }
        if (!inView) {
            animation.start({
                x: "-300px",
                opacity: 0,
                scale: 0.8,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                    stiffness: 100,
                }
            })

            animation2.start({
                x: "-300px",
                opacity: 0,
                scale: 0.8,
            })
            animation3.start({
                x: "-300px",
                opacity: 0,
                scale: 0.8,
            })
        }

    }, [inView])


    return (
        <motion.div
            id={"aboutMe"}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={animation}
            transition={{ duration: 4, type: "spring", stiffness: 100, bounce: 0.3 }}
            ref={ref}
            className="aboutMe">




            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: "-300px" }}
                animate={animation3}
                transition={{ duration: 1, type: "spring", stiffness: 100, bounce: 0.3, delay: 0.2 }}
                className="aboutMe_left">
                <h3>About Me</h3>
                <p>I am a Freelance MERN Stack & Python  Developer working globally . I've been graduating in Bachelor in Computer Application . I have 2+  years of experience in Web Devlopment . I'd built the web application according to the clients requirements for their business / personal use and also collaborted in several the projects as a MERN Stack Devloper remotely. </p>
            </motion.div>

            <div className="aboutMe_right">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: "-300px" }}
                    animate={animation2}
                    transition={{ duration: 1, type: "spring", stiffness: 100, bounce: 0.3, delay: 0.4 }}
                    className="aboutMe_box aboutBox-1">
                    <AccountTreeIcon sx={{ width: "3rem", height: "4rem", fontSize: "5rem" }} className={"aboutMeIcons icon-1"} />
                    <h4> <span> 77+</span>  Projects </h4>   </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: "-300px" }}
                    animate={animation2}
                    transition={{ duration: 1, type: "spring", stiffness: 100, bounce: 0.3, delay: 0.6 }}
                    className="aboutMe_box aboutBox-2">  <Diversity2Icon className={"aboutMeIcons icon-2"} />   <h4> <span>22+  </span> Happy Clients</h4>   </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: "-300px" }}
                    animate={animation2}
                    transition={{ duration: 1, type: "spring", stiffness: 100, bounce: 0.3, delay: 0.8 }}
                    className="aboutMe_box aboutBox-3">  <WorkHistoryIcon className={"aboutMeIcons icon-3"} />   <h4> <span>2+</span> years of Experience </h4>   </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: "-300px" }}
                    animate={animation2}
                    transition={{ duration: 1, type: "spring", stiffness: 100, bounce: 0.3, delay: 1 }}
                    className="aboutMe_box aboutBox-4">  <AutoAwesomeIcon className={"aboutMeIcons icon-4"} />   <h4><span>100%</span>  Effieciency</h4>   </motion.div>

            </div>
        </motion.div>
    )
}

export default About