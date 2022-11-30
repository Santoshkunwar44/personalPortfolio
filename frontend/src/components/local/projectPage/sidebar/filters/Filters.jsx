import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useEffect, useRef, useState } from 'react'
import Select from 'react-select'
import { getTools } from '../../../../../utility/urls/tools'
import SortBy from './SortBy'
import { useDispatch } from "react-redux"
import TuneIcon from '@mui/icons-material/Tune';

import { filterProjectsApi, getProjectCat } from '../../../../../utility/urls/project';
import { setFilteredData } from '../../../../../redux/action/utilityAction';
import { setProjectFilters } from '../../../../../redux/action/searchAction';
import { useLocation, useParams } from 'react-router-dom';
const Filters = () => {

    const [allTools, setAllTools] = useState([])
    const [filterOptionsTools, setFilterOptionTools] = useState([])
    const [userFilter, setUserFilter] = useState({})
    const [projectCategories, setProjectCategories] = useState([])
    const dispatch = useDispatch()
    const typeRef = useRef()
    const params = useParams().toolsProject
    const location = useLocation().pathname



    useEffect(() => {
        getProjectCatFunc()
        getToolsFunc()
    }, [])







    useEffect(() => {

        dispatch(setProjectFilters(userFilter))
        fetchFilterProjects()
    }, [userFilter])





    async function getProjectCatFunc() {
        try {
            const { data } = await getProjectCat()
            setProjectCategories(data.message)
        } catch (error) {

        }
    }


    async function fetchFilterProjects() {
        try {
            if (location === "/projects/Javascript") {

                let clonedUserFilters = { ...userFilter }
                clonedUserFilters.tools = [params]
                const { data } = await filterProjectsApi(clonedUserFilters)
                console.log("filtered response", data)
                dispatch(setFilteredData(data.message))
            } else {
                const { data } = await filterProjectsApi(userFilter)
                console.log("filtered response", data)
                dispatch(setFilteredData(data.message))
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getToolsFunc = async () => {
        try {
            const { data } = await getTools()
            setAllTools(data.message)
        } catch (error) {
            console.log(error)
        }
    }







    useEffect(() => {

        const options = allTools.map(item => (
            { value: item.name, label: item.name }
        ))
        setFilterOptionTools(options)

    }, [allTools])







    const handleFilters = (event, name, value) => {
        if (name === "tools") {
            console.log(event)
            if (event.length === 0) {
                let userFilterClone = { ...userFilter }
                delete userFilterClone.tools;
                setUserFilter(userFilterClone)
                return
            }
            let tools = event.map(e => e.value)
            setUserFilter((prev) => ({ ...prev, tools }))
            return
        }

        if (event === null) {
            setUserFilter((prev) => ({ ...prev, [name]: value }))
            return
        }




        setUserFilter((prev) => ({
            ...prev, [name]: event.target.value
        }))



    }
    const handleType = (name, value) => {

        if (userFilter?.type) {

            let exists = userFilter.type.find(e => e === value)
            if (exists) {
                let clonedUserFilterType = [...userFilter.type]
                clonedUserFilterType = clonedUserFilterType.filter(e => e !== value)
                if (clonedUserFilterType.length === 0) {
                    let clonedUserFilter = { ...userFilter }
                    delete clonedUserFilter.type
                    setUserFilter(clonedUserFilter)
                } else {
                    setUserFilter((prev) => ({
                        ...prev, type: clonedUserFilterType
                    }))
                }
            } else {

                setUserFilter((prev) => {
                    if (prev.type?.length > 0) {
                        return {
                            ...prev, [name]: [...prev.type, value]
                        }
                    } else {
                        return {
                            ...prev, [name]: [value]
                        }
                    }
                })

            }
        } else {
            setUserFilter((prev) => {

                return {
                    ...prev, [name]: [value]
                }
            })
        }




    }

    console.log(userFilter)


    return (
        <div className='filter'>
            <div className='filter_item filter_first'>
                <Select isMulti placeholder={"Select the technology"} onChange={(e) => handleFilters(e, "tools")} options={filterOptionsTools} styles={{ fontSize: "15px" }} />
                <div className="">
                    <div className='soryBy'>
                        <div className='make_row'>
                            <p className='sortTypeName'> Limit </p>
                        </div>
                        <input min={5} onChange={(e) => handleFilters(e, 'limit')} type="number" name="" id="" />

                    </div>
                </div>
                <div className="">
                    <div className='soryBy'>
                        <div className='make_row'>
                            <p className='sortTypeName'> Ratings </p>
                        </div>
                        <input min={0} value={userFilter?.rating ? userFilter?.rating : "All"} onChange={(e) => handleFilters(e, 'rating')} type="number" name="" id="" />

                    </div>
                </div>
                <div className="">
                    <div className='soryBy'>
                        <div className='make_row '>
                            {/* <TuneIcon className='filterSortIcon' sx={{ width: "100%" }} />  */}
                            <p className='sortTypeName'> Sort By </p>
                        </div>
                        <SortBy handleChange={handleFilters} />
                    </div>
                </div>
            </div>
            {/* <div className="filter_item" >
                    <span className='filter_item_heading' style={{ paddingBottom: "0px" }} >Ratings</span>
                    <ul>

                        <li><Ratingsss handleChange={handleFilters} /></li>
                    </ul>
                </div> */}
            <div className='filter_item categoryList'>

                <span className='filter_item_heading'>Project Type</span>

                {
                    projectCategories.map((item, index) => (
                        <div ref={typeRef} className='make_row type_project'>

                            <label>{item.type[0]}</label>
                            <input type="checkbox" onChange={() => handleType('type', item.type[0])} />
                        </div>
                    ))
                }



            </div>

        </div>
    )
}

export default Filters



function Ratingsss({ handleChange }) {

    return (
        <Box
            sx={{
                '& > legend': { mt: 1 },
                display: "flex",
                flexDirection: "column"
            }}

        >
            <div className={"make_row"} onClick={() => handleChange(null, 'rating', 5)}>

                <Rating
                    value={5}
                    name="read-only"
                />
            </div>
            <div className={"make_row"} onClick={() => handleChange(null, 'rating', 4)}>

                <Rating
                    value={4}
                    name="read-only"
                />
            </div>
            <div className={"make_row"} onClick={() => handleChange(null, 'rating', 3)}>

                <Rating
                    value={3}
                    name="read-only"
                />
            </div>
            <div className={"make_row"} onClick={() => handleChange(null, 'rating', 2)}>

                <Rating
                    value={2}
                    name="read-only"
                />
            </div>
            <div className={"make_row"} onClick={() => handleChange(null, 'rating', 1)}>

                <Rating
                    value={1}
                    name="read-only"
                />
            </div>
        </Box>
    );
}




const projectType = [
    "Socail Media",
    "E-commerce",
    "Video / Audio Calling",
    "Film / Trailers",
    "File Sharing",
    "Daily Useful websites",
]