import "./reviews.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"


const Reviews = () => {


    const animation = useAnimation()
    const { ref, inView } = useInView({
        threshold: 0.3
    })

    useEffect(() => {

        console.log(inView)

        if (inView) {
            animation.start({
                opacity: 1,
                scale: 1,
                rotate: 0,
                y: 0

            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                scale: 0.5,
                rotate: 100,
                y: "-100px"
            })
        }
    }, [inView])


    return (
        <motion.section
            ref={ref}
            layout
            initial={{ opacity: 1, scale: 0.5, rotate: 100, y: "-100px" }}
            transition={{ duration: 0.71 }}
            animate={animation}
            className='reviews section mini-container'
            id="reviews">
            <div className="reviews_header">

                <h1>My works with the clients</h1>
            </div>
            <div className="reviewsWrapper">
                <div className='reviewsLeft'>

                    <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: .3 }}
                        className="fiverMainImg" src="/fiverMain.png" alt="" />
                    <a href="https://www.fiverr.com/santoshkunwa442?up_rollout=true" target={"_blank"}>
                        <button className="fiverBtn"> <img width={'45px'} src="/fiverlogo.png" alt="fiverimg" />  <span>Visit Profile</span> </button>
                    </a>
                </div>
                <div className='reviewsRight'>


                    <p> <h3 style={{ display: "inline-block" }}>F</h3> reelancing is a best way to globalize your skills and built a self-confindence & experiences . I have been upgrading my skills so I can provide the  satisfactory products to my clients as they asked for . </p>
                    <p>I have been providing services to the clients in the fiver platform as a Fullstack Mern Devloper . And every clients upto the date are appreciating with my works and providing me full ratings and good Reviews</p>

                    <div className="reviewsImage">
                        <motion.img
                            transition={{ duration: .3 }}
                            whileHover={
                                { scale: 1.2 }
                            }
                            src="/reviews.png" alt="reviewsImg" />

                    </div>

                </div>



            </div>

        </motion.section>
    )
}

export default Reviews