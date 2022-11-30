import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AppPages from '../../components/local/app_pages/AppPages'
import Navbar from '../../components/local/navbar/Navbar'
import { chat_app_pages } from '../../data/theData'
import { getSingleProject, rateProject } from '../../utility/urls/project'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { Link } from 'react-router-dom'
import "./appalone.css"
import { Button, Rating, Typography } from '@mui/material'

import { useSelector } from "react-redux"
const AppAlone = () => {


    const [thePages, setThePages] = useState([])
    const user = useSelector((state) => state.authReducer.user)
    const [currentProject, setCurrentProject] = useState({})
    const [currentPage, setCurrentPage] = useState({
        index: "",
        data: null
    })
    const [defaultData, setDefaultData] = useState({
        defaultRating: null,

    })
    const projectId = useParams().projectId
    const [value, setValue] = React.useState(0);
    useEffect(() => {

        setThePages(
            chat_app_pages.filter(page => page.darkMode === true)
        )

    }, [])


    useEffect(() => {
        if (Object.keys(currentProject).length > 0) {
            setCurrentPage((prev) => ({ ...prev, data: currentProject?.pages[0], index: currentProject?.pages[0].name }))


        }
    }, [currentProject])

    useEffect(() => {
        fetchCurrentProjectFunc()
    }, [projectId])


    useEffect(() => {

        const userRating = currentProject.ratings?.filter((rating) => rating?.userId === user?._id)
        if (userRating) {
            setDefaultData((prev) => ({ ...prev, defaultRating: userRating[0]?.rating }))
        }
    }, [currentProject, user])


    console.log(currentPage)

    // fetch  current project f unction

    const fetchCurrentProjectFunc = async () => {
        try {
            const { data } = await getSingleProject(projectId)
            setCurrentProject(data.message)
        } catch (error) {
            console.log(error)
        }

    }


    const handleStartRating = async () => {


        const theBody = {

            userId: user?._id,
            rating: value,
            id: currentProject?._id

        }

        try {

            const { data } = await rateProject(theBody)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleStartRating()
    }, [value])





    return (
        <>
            <Navbar />
            <div className='app_alone'>
                <div className='project_main'>
                    <div className="project_details_appAlone left">
                        <div className="project_main_info_app_alone">
                            <div className='project_info_main'>
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <h3 className='project_name'>{currentProject?.name}</h3>
                                    <Link to={{ pathname: "/admin/project/new" }} state={{ data: currentProject }}>
                                        <Button>
                                            <ModeEditOutlinedIcon className={"editProject"} />
                                        </Button>
                                    </Link>
                                </div>
                                <div className='project_info_type_rating'>

                                    <span className='single_project_type'>{currentProject?.type && currentProject?.type[0]} </span>
                                    <div className='ratingBox' style={{ position: 'relative' }}>
                                        <Rating name="read-only" value={currentProject.avgRating ? currentProject.avgRating : 0} readOnly />
                                        <div className='ratingsBadge'>
                                            {currentProject?.ratings?.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='project_featur'>
                                <h2 className='project_feature_header'>Application Features</h2>

                                <ul>
                                    {
                                        currentProject?.currentFeatures?.map((item, index) => (

                                            <li key={index
                                            } className="project_feature_item">{item}</li>
                                        ))
                                    }

                                </ul>
                                <h2 className='project_feature_header'>
                                    Upcoming features
                                </h2>
                                {
                                    currentProject?.upcomingFeatures?.map((item, index) => (

                                        <li key={index} className="project_feature_item">{item} </li>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='project_technology_used'>

                            <h2 className='project_feature_header'>
                                Technology used :
                            </h2>
                            <div className='appAlone_header_bottom'>

                                <div className='technology_list'>

                                    <div className='tech_item'>
                                        <img src="/assets/images/toosl/node.jpg" alt="tech-tools" style={{ objectFit: "cover", borderRadius: "4px" }} width={'35px'} height={"35px"} />

                                    </div>
                                    <div className='tech_item'>
                                        <img src="/assets/images/react.jpg" alt="tech-tools" style={{ objectFit: "cover", borderRadius: "4px" }} width={'35px'} height={"35px"} />

                                    </div>
                                    <div className='tech_item'>
                                        <img src="/assets/images/toosl/three.png" alt="tech-tools" style={{ objectFit: "cover", borderRadius: "4px" }} width={'35px'} height={"35px"} />

                                    </div>
                                    <div className='tech_item'>
                                        <img src="/assets/images/toosl/mongo_db.png" alt="tech-tools" style={{ objectFit: "cover", borderRadius: "4px" }} width={'35px'} height={"35px"} />

                                    </div>


                                </div>
                                <div className='appAlone_header_button'>
                                    <button>
                                        View Source Code

                                    </button>
                                    <button>
                                        Go to Website
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='right'>

                    </div>
                </div>
                <div className='project_page_toolss'>
                    <div className='app_alone_page_header'>

                        <div className='start_ratingBox'>
                            <span className='rating_text'> Rate The Project</span>
                            <Rating name="size-large" value={+defaultData.defaultRating} size="large" />
                        </div>
                        <h3 className='section_title'>
                            Application pages view
                        </h3>
                    </div>
                    <div className='project_page_photo_container'>
                        <div className='project_page_name_list'>
                            {

                                currentProject?.pages?.map((page) => (
                                    <div key={page} className={`project_cat_list_item ${currentPage.index === page.name ? "activeCat" : ""} `} onClick={() => setCurrentPage((prev) => ({ ...prev, index: page.name, data: page }))} >
                                        {page.name}
                                    </div>
                                ))
                            }
                        </div>

                        <AppPages page={currentPage.data} />


                    </div>

                </div>



            </div>
        </>
    )
}

export default AppAlone