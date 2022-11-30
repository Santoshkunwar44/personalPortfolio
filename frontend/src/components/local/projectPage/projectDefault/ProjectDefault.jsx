import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import NotFound from "../../../global/notFound/NotFound"
import TheProjectLogic from "../../../global/theProjects/TheProjectLogic"
import FilteredUi from "./FilteredUi"
import "./Projectdefault.css"

const ProjectDefault = () => {

    const filteredProjects = useSelector((state) => state.utilityReducer.data)
    const searchFilters = useSelector((state) => state.searchReducer.projectFilters)
    const [javascriptProjects, setJavascriptProjects] = useState([])
    const [reactJsProjects, setReactProject] = useState([])






    useEffect(() => {


        if (!filteredProjects) return
        const jsProject = filteredProjects.filter((proj) => {
            return proj.usedTools.includes("Javascript")
        })

        setJavascriptProjects(jsProject)

        console.log("js project ", jsProject)
        const reactProject = filteredProjects.filter((proj) => {
            return proj.usedTools.includes("React Js")
        })
        setReactProject(reactProject)

        console.log("react project ", reactProject)

        const pyProject = filteredProjects.filter((proj) => {
            return proj.usedTools.includes("Python")
        })



    }, [filteredProjects])

    return (
        <>
            {
                (Object.keys(searchFilters).length !== 0) ? <FilteredUi /> : null
            }
            {
                Object.keys(searchFilters).length > 0 ? (filteredProjects && filteredProjects.length > 0) ?
                    <>
                        {javascriptProjects.length > 0 &&
                            <TheProjectLogic title={'Javascript Projects'} type={"Javascript"} filteredItem={javascriptProjects} />}
                        {
                            reactJsProjects.length > 0 && <TheProjectLogic title={'React Js Projects'} type={"React Js"} filteredItem={reactJsProjects} />
                        }

                    </> : <NotFound /> :

                    < div className='projectDefault'>
                        <TheProjectLogic title={'Javascript Projects'} type={"Javascript"} />
                        <TheProjectLogic title={'React Js Projects'} type={"React Js"} />

                        <TheProjectLogic title={'Python and Django'} type={"Python"} />
                    </div>
            }

        </>
    )
}
export default ProjectDefault