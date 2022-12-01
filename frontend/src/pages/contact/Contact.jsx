import Gradient from '../../components/gradientImg/Gradient'
import Footer from '../../components/local/footer/Footer'
import Navbar from '../../components/local/navbar/Navbar'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import "./contact.css"
import ContactFrom from './ContactFrom'
import { motion } from "framer-motion"

const Contact = () => {
    return (
        <>
            <Navbar />
            <Gradient />
            <motion.div

                initial={{
                    opacity: 0.7,
                    x: "-700px",
                    scale: 0.7
                }}
                animate={{
                    opacity: 1,
                    x: "0",
                    scale: 1
                }}

                transition={{ duration: 1 }}
                className='contact mid_width'>
                <div className='personal'>

                    <div className="personalImg">
                        <img draggable={"false"} src="/assets/images/user.jpg" alt="user_photo" />
                    </div>
                    <div className='personlHeadingText'>
                        <h1>I am Freelance Fullstack developer, </h1>
                        <h1>working globally </h1>
                        <span className='PersonalsmallText'>Available for New Opportunity</span>
                        <button className='cv_button personalBtn'> <SimCardDownloadIcon className='downloadIconIcon' /> <span>Download CV</span></button>
                    </div>


                </div>

                <ContactFrom />

            </motion.div>

            <Footer />
        </>
    )
}

export default Contact