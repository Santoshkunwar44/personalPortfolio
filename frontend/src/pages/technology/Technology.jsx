import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PiechartBox from "../../components/global/piecharts/Piechart"
import Footer from "../../components/local/footer/Footer"
import Navbar from "../../components/local/navbar/Navbar"
import Project from "../../components/local/project/Project"
import Technologies from "../../components/local/technologies/Technologies"
import { SiSemanticweb } from "react-icons/si"
import { Link } from "react-scroll"
import { findProjects, getProjectChart, getProjects } from "../../utility/urls/project"
import "./technology.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Gradient from "../../components/gradientImg/Gradient"
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import { getTools } from "../../utility/urls/tools"


const Technology = () => {



    const [currentChartProject, setCurrentChartProject] = useState("React Js")
    const [currentProjectNumericData, setCurrentProjectNumericData] = useState({})
    const [theProjects, setTheProjects] = useState([])
    const navigate = useNavigate()
    const animation = useAnimation()
    const [frontendData, setFrontendChartData] = useState([])
    const [backendData, setBackendChartData] = useState([])
    const [allTools, setAllTools] = useState([])


    const [chartData, setAllChartData] = useState([])




    const { ref, inView } = useInView({
        threshold: 0.3

    })


    useEffect(() => {
        fetchChartData()
        fetchAllTools()
    }, [])
    useEffect(() => {
        searchForProject()
    }, [currentChartProject])


    useEffect(() => {

        if (chartData?.length > 0) {

            const currentProjectChartData = chartData?.find((data) => data._id === currentChartProject)
            let totalToolsNum = 0
            frontendData.forEach(data => {
                totalToolsNum += data.value;
            })
            setCurrentProjectNumericData({ count: currentProjectChartData.count, portion: Math.round((currentProjectChartData.count / totalToolsNum) * 100) })
        }
    }, [frontendData, currentChartProject])

    console.log(currentProjectNumericData)

    const fetchAllTools = async () => {

        try {
            const { data } = await getTools()
            setAllTools(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchChartData = async () => {

        try {
            const { data } = await getProjectChart()
            setAllChartData(data.message)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {

        if (chartData?.length > 0 && allTools?.length > 0) {


            // chartData.filter((data) => allTools((tool) => tool.name === data._id))

            chartData.forEach((data) => {
                allTools.forEach(tool => {
                    console.log(tool.name, data._id, tool.name === data._id)
                    if (tool.name === data._id) {
                        if (tool.type === "Frontend") {
                            setFrontendChartData((prev) => ([...prev, { name: data._id, value: data.count }]))
                        } else if (tool.type === "Backend") {
                            setBackendChartData((prev) => ([...prev, { name: data._id, value: data.count }]))
                        }
                    }
                })

            })

        }

    }, [chartData, allTools])






    useEffect(() => {
        if (inView) {
            animation.start({
                x: '0',
                scale: 1,
                opacity: 1
            })
        }
        if (!inView) {
            animation.start({
                x: "300px",
                scale: 0.8,
                opacity: 0
            })
        }


    }, [inView])


    // useEffects 


    useEffect(() => {
        fetchAllProjects()
    }, [])









    // functions
    async function fetchAllProjects() {
        try {
            const { data } = await getProjects()
            setTheProjects(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const searchForProject = async () => {
        console.log("sarching for new projectsss ....", currentChartProject)
        try {
            const { data } = await findProjects(currentChartProject)
            setTheProjects(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Gradient />
            <div className="technology">
                <Navbar />
                <div className="technologyWrapper">
                    <Technologies />

                    <motion.div
                        initial={{ scale: 0.8, x: "-300px", opacity: 0 }}
                        animate={animation}
                        ref={ref}
                        transition={{ duration: 1 }}
                        style={{ width: "100%", maxWidth: "1024px", margin: "auto", paddingTop: "2rem" }}


                        className="chartBox ">
                        <h3 style={{ paddingBottom: "1rem", marginBottom: "2rem" }} className="section_title">Web Tools Pie Charts</h3>
                        <p className="piechartHeaderDescription">Pie chart depicts the percentage of web Tools used in my Projects. Choose the tools to view the corresponding web tools projects.</p>
                        <div className="pieChartContainer" style={{ display: "grid", gap: '2rem', background: "transparent" }}>

                            <div className="pieChartWrapper">
                                <h3 className="piechartTextBox"> <SiSemanticweb className="pieChartToolIcon" />  <span>Frontend Web Tools</span> </h3>
                                <PiechartBox chartData={frontendData} handleClick={setCurrentChartProject} />
                                <span className="piechartDesc">Click to see the tool's Projects</span>
                            </div>
                            <div className="pieChartInfo">
                                <div className="pieChartInfoBox">
                                    <div className="piechartInfoTop">

                                        <h2 className="pieChartInfoBox_projectName">{currentChartProject}</h2>
                                        <h4 className="percentageUsed">{currentProjectNumericData?.portion}% </h4>
                                    </div>
                                    <span className="projectsNumber">Used in {theProjects?.length} projects</span>
                                    <ul>
                                        {
                                            theProjects.map((project) => (
                                                <>
                                                    <li>  <span>{project?.name}</span> <CallMissedOutgoingIcon className={"usedProjectsIconVisit"} />  </li>

                                                </>
                                            ))
                                        }

                                    </ul>
                                    <Link style={{ margin: "auto" }} to="showPieProject" offset={-100}>
                                        <div className="piechartInfoBottomViewProjectText">View Projects</div>
                                    </Link>
                                </div>

                                {/* <h3 className="piechartTextBox"> <FaServer className="pieChartToolIcon" /> <span>Backend Tools</span> </h3>
                                <PiechartBox chartData={backendData} handleClick={setCurrentChartProject} />
                                <span className="piechartDesc">Click to see the tool's Projects</span> */}
                            </div>

                        </div>
                        <Link to="showPieProject" offset={-100}>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.8 }}

                                className="goDownPiechart">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVRYheWXMW/TQBSAv7PTtBWk0EKCGoehKgMVicFCSKwQCSEhfkaYmBloYCoLM0sb+AeMsKCmEkhMFBBWqnaACRpIh1YKqhA09jHUgTSOG1/iZIDb7Lun73vvzs82/O9DnMudXxZSJDTNvWnb9tYwoKZpplypPZPIusjmLsj923LDacSurq+//TpIuGVZyb0GZZA5AO3vlDirxxorc3MXp4cFPyAwm4l7Es4L0zRTUcNN00ztNeQKyNw+q03g8T2DM6dHAbKuFC+jrIRlWUlX6stAdiY9wuJdwy8wmdApFdOeRHTb0Vr2mfQIpWKGk8d1v8AgJLrBfQJRSoSBdxSIQiIsPFCgHwkV+KECvUiowg8IbNedQIml+XTXPtH+nD+5HwxvZWnAKkBhYTNQYmpCp1Q0PAmyrtTKrRJeby8D2dlMnFLRYGoiGF5Y2Gxeror2si3NZ0hOdg7e+e5QWKjy8fNPmu+OsTG3Ebbs7fHSjV8RvWbw6csvgIp3WzlOE27etu0tHaBWq+0axvRT1xXXd+rOqVfvdslfSnBk3H9Gx0c1rl0+yusPP9iuOykg1azciWPBmd96UPXgckO68Xyl8r4GIFoXqlbi9sMqAI/upJUzb86L9gCVM9FtdNrztbU331rX+ASikggDDxToVyIs/FCBXiVU4F0FVCVU4aEEwkr0Ag8t0E2iV7iSQJBELEbPcGUB8DcrILDJDEQAOn3fq2felwD8qcRzAE24N4b1W/fvjd/kWNnD2lqpGgAAAABJRU5ErkJggg==" />
                                <span>{currentChartProject} Project</span>
                            </motion.div>
                        </Link>
                    </motion.div>

                    <div id="showPieProject" className="technology_chart_project section">
                        <h3 className="section_title">The {currentChartProject} Projects</h3>


                        <div className="projectCollection">
                            {theProjects?.map((item, index) => (
                                <Project item={item} key={item._id} />
                            ))}
                        </div>
                        <button onClick={() => navigate(`/projects/${currentChartProject}`)} className="viewMore">View More</button>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Technology

