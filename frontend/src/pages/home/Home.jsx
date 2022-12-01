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

                transition={{ duration: 1 }}
                className="main_container">
                <BannerContainer />
                <div className={`home_box`} ref={homeContainerRef}>
                    {/* <div onClick={() => window.scrollTo(0, 0)} className={`goUPArrow ${goUpWarn ? "goUpWarn" : ""}`}>
                        <img src="data:image/png;base64,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"></img>
                    </div> */}
                    <Side />
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