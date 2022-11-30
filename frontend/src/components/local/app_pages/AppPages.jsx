import { useEffect, useState } from "react"
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import "./app_pages.css"
import Nightlight from "@mui/icons-material/Nightlight";
import { LightMode } from "@mui/icons-material"
import ImageModal from "../../global/modal/ImageModal/ImageModal";
const AppPages = ({ page, project }) => {
    const [theme, setTheme] = useState("light")
    const [pagePhoto, setPagePhoto] = useState()
    const [ActionButton, setActionButton] = useState({
        darkMode: false,
        isExpanded: false
    })


    useEffect(() => {

        // const thePages = chat_app_pages.filter(pageItem => pageItem.name === page.name)
        // let searchedPage = null
        // if () {
        //     searchedPage = thePages.find(thePage => thePage.darkMode === false)
        //     setPagePhoto(searchedPage?.src)
        // } else {
        //     searchedPage = thePages.find(thePage => thePage.darkMode === true)
        //     setPagePhoto(searchedPage?.src)
        // }

        setPagePhoto(page?.src)


    }, [theme, page?.name])



    return (
        <div className="project_page_item">
            <div className='project_page_name'>
                <div className="project_page_details">
                    <div className="project_page_details_actions">


                        <Nightlight className="expandIcon appAlone_actionBtn" />

                        <LightMode className="expandIcon appAlone_actionBtn" />
                        <ImageModal handleCloseExpand={() => setActionButton((prev) => ({ ...prev, isExpanded: !prev.isExpanded }))} currentImage={pagePhoto}>
                            <AspectRatioIcon onClick={() => setActionButton((prev) => ({ ...prev, isExpanded: !prev.isExpanded }))} className={`expandIcon appAlone_actionBtn ${ActionButton.isExpanded ? "isExpand" : ""}`} />
                        </ImageModal>

                    </div>
                    <span className="project_page_name">{page?.name}</span>

                </div>
            </div>
            <div className="project_page_image_wrapper">

                <img draggable={"false"} className='project_page_img' src={pagePhoto} alt={page?.name} />
            </div>
        </div>
    )
}

export default AppPages