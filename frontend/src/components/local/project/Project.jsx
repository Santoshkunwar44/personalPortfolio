import { useEffect, useState } from "react"
import textShortner from "../../../utility/services/textShortner"
import "./project.css"
import { Link, useNavigate } from "react-router-dom"
import { DashboardOutlined, FormatShapesOutlined } from "@material-ui/icons"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Project = ({ item, mini, index, mid }) => {
    const navigate = useNavigate()
    const [hovered, setHovered] = useState(false)

    const handleReadMore = () => {
        navigate(`/projects/single/${item?._id}`)
    }

    const animate = useAnimation()
    const { ref, inView } = useInView()


    useEffect(() => {
        if (inView) {

            animate.start({
                opacity: 1, scale: 1, x: "0", transition: { delay: .3, type: "spring" }
            })
        }
        if (!inView) {
            animate.start({
                opacity: 0, scale: 0.8, x: "200px", transition: { delay: .3, type: "spring" }
            })
        }
    }, [inView])


    return (

        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, x: "200px" }}
            animate={animate}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`project ${mini && 'mini'} ${mid ? "mid" : ""}`}
        >
            <div className="projectWrapper">


                <div className="image_wrapper">
                    <img loading="lazy" draggable={"false"} width={mini ? "250px" : "280px"} height={mini ? "250px" : "250px"} src={item?.mainImg} alt="project-img" />
                    {/* <div className={`hidden_info ${hovered && "show_hidden_info"}`}>
                        <a href={item?.url}>

                            <button className="project_info_button"  ><DashboardOutlined className="project_info_button_icon" />  <span>View Website</span> </button>
                        </a>
                        <button onClick={handleReadMore} className="project_info_button"> <FormatShapesOutlined className="project_info_button_icon" />  <span>Read More</span> </button>
                    </div> */}
                </div>
                <div className={`project_details`}>
                    <div className="project_details_first">
                        <h5 className='project_name_home'>{item?.name}</h5>
                        <h6 className='project_type'>{item?.type}</h6>
                        {
                            !mini && <p className='project_desc'>{textShortner(item?.desc, 12)}</p>
                        }
                    </div>


                </div>


            </div >
        </motion.div >
    )
}

export default Project

