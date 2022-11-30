import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import LoginModal from "../../global/modal/LoginModal/LoginModal"
import NotFound from "../../global/notFound/NotFound"
import TheProjectLogic from "../../global/theProjects/TheProjectLogic"
import "./toolspage.css"

const ToolsPage = () => {
    const filteredProjects = useSelector((state) => state.utilityReducer.data)
    const searchFilters = useSelector((state) => state.searchReducer.projectFilters)
    const params = useParams().toolsProject
    const [notFound, setNotFound] = useState(false)
    const [filteredItem, setFilteredItem] = useState(null)

    const handleFilteredItem = () => {

        if (params) {
            if (Object.keys(searchFilters).length > 0) {
                if (filteredProjects && filteredProjects.length > 0) {
                    setNotFound(false)
                    setFilteredItem(filteredProjects)
                } else {
                    setNotFound(true)
                    setFilteredItem(null)
                }
            } else {
                setNotFound(false)
                setFilteredItem(null)
            }
        }
    }
    useEffect(() => {
        handleFilteredItem()
    }, [searchFilters, filteredProjects])

    return (
        < div>
            <LoginModal />
            {
                notFound ? <NotFound /> : < TheProjectLogic filteredItem={filteredItem ? filteredItem : null} toolsPage={true} title={`${params} Projects`} type={params} />
            }



        </div >
    )
}

export default ToolsPage