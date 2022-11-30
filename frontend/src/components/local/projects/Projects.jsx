import "./projects.css"
import { motion, useAnimation } from "framer-motion"
import { Suspense, useEffect, useState } from 'react';
import { getProjects } from '../../../utility/urls/project';
import Slider from '../../global/carousel/Carousel';
import { useInView } from "react-intersection-observer";

const Projects = () => {

    const [theProjects, setTheProjects] = useState([])

    const { ref, inView } = useInView({
        threshold: 0.5
    })

    const animation = useAnimation()



    useEffect(() => {

        if (inView) {



            animation.start({
                y: "0px",
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 1,
                }
            })
        }
        if (!inView) {
            animation.start({
                y: "-200px",
                opacity: 0,
                scale: 0.8,
                transition: {
                    duration: 1,
                }
            })
        }

    }, [inView])




    useEffect(() => {
        fetchProjects()
    }, [])
    const fetchProjects = async () => {
        try {
            const { data } = await getProjects()
            setTheProjects(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            {/* <div className='projects_header'>

                    <h3 className='section_title'>My Some Projects</h3>



                </div> */}
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: "200px" }}
                animate={animation}
                transition={{ duration: 0.71 }}
                style={{ background: "gray" }}
                className='projects mini-container' id='projects'>
                {/* {
                    theProjects.slice(0, 3).map((item, i) => (
                        <Project item={item} key={item.name} />
                        ))
                    } */}
                <Suspense fallback={null}>
                    <Slider item={theProjects} />
                </Suspense>
                {/* <div style={{ marginLeft: "2rem", position: "absolute", right: "-18px" }}>


<Fab color="primary" className={"next_project_btn"} aria-label="add">
<ChevronRight />
</Fab>
</div> */}


            </motion.section>
        </>
    )
}

export default Projects

// const theProjects = [
//     {
//         img: "/assets/images/chat_app.jpg",
//         name: "Talkative",
//         type: "social media and chat application",
//         desc: "This is the social media web application . This application connects you with the people all around the world & share your photos with the friends and chat with the loving ones"

//     },
//     {
//         img: "/assets/images/movie_app.jpg",
//         name: "Film Mahal",
//         type: "Movie application",
//         desc: "This is the movie application. The viewers can watch the movie they like for freee "

//     },
//     {
//         img: "/assets/images/video_calling.jpg",
//         name: "Vid Mate",
//         type: "Video calling application",
//         desc: "Vid Mate is video calling  web application which aims at providing the people talk with each other visually from one end to another with the top notch video quality"


//     },
//     {
//         img: "/assets/images/file_sharing_app.png",
//         name: "Shero Fero",
//         type: "File sharing applicaiton",
//         desc: "Shero Fero is the web product for sharing the files with the people through email "

//     },
//     {
//         img: "/assets/images/photo_album_app.jpg",
//         name: "File byte",
//         type: "Files Saving application",
//         desc: "Photo Album allows the user to keep their files safe in the album. It manages the images and videos in the proper and secure format"

//     },
//     {
//         img: "/assets/images/map_app.webp",
//         name: "Lets Go",
//         type: "Map   application",
//         desc: "Photo Album allows the user to keep their files safe in the album. It manages the images and videos in the proper and secure format"

//     },

// ]