import BannerContainer from "../../components/local/banner/BannerContainer"
import Footer from "../../components/local/footer/Footer"
import Navbar from "../../components/local/navbar/Navbar"
import ProjectCat from "../../components/local/Poject_cat/Project_cat"
import Projects from "../../components/local/projects/Projects"
import Reviews from "../../components/local/reviews/Reviews"
import Side from "../../components/local/side/Side"
import Technologies from "../../components/local/technologies/Technologies"
import { useEffect, useRef, useState } from "react"
import "./home.css"
import About from "../../components/local/aboutMe/About"
import Contact from "../../components/contact/Contact"
import { motion } from "framer-motion"
const Home = () => {
    const homeContainerRef = useRef();
    const [goUpWarn, setGoUpWarn] = useState(false)
    useEffect(() => {
        homeContainerRef.current.addEventListener("scroll", (e) => {
            console.log(homeContainerRef.current.scrollTop)
            let homeTop = homeContainerRef.current.scrollTop
            if (homeTop > 0 && homeTop < 150) {
                setGoUpWarn(true)
            } else {
                setGoUpWarn(false)
            }

        })
    }, [])




    return (
        <>
            <Navbar />
            <motion.div
                initial={{
                    opacity: 0.4,
                    x: "-300px",
                    y: "100px"
                }}
                animate={{
                    opacity: 1,
                    x: "0",
                    y: "0"
                }}

                transition={{ duration: 0.41 }}
                className="main_container">
                <BannerContainer />

                <div className={`home_box`} ref={homeContainerRef}>

                    <Technologies />
                    <About />
                    <Projects />
                    <Reviews />
                    <ProjectCat />
                    <Contact />
                    <Footer />
                </div>
            </motion.div>
        </>
    )
}

export default Home