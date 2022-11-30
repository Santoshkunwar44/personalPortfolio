import { useSelector } from "react-redux"
import "./filteredUi.css"
const FilteredUi = () => {

    const filteredTools = useSelector((state) => state.searchReducer.projectFilters?.tools)
    const { limit, sort, rating } = useSelector((state) => state.searchReducer.projectFilters)
    const projectType = useSelector((state) => state.searchReducer.projectFilters?.type)
    return (
        <>
            <div className="filteredUiBox">
                <div className='filteredUi'>
                    <div style={{ flex: 3 }}>

                        <label className="labelName">Web tools</label>
                        <div className="filteredUi-left-container filter_item_list">

                            <div className="filteredUiLeft filteredUiItem">
                                <select className="techFilterSelect">
                                    {
                                        filteredTools?.map((item) => (
                                            <option>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="filteredUiRight filteredUiItem">
                        <div>

                            <label className="labelName" htmlFor="">Type</label>
                            <div className="filter_item_list">
                                <select className="techFilterSelect">
                                    {
                                        projectType?.map((item) => (
                                            <option>{item}</option>

                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <div>


                            <label className="labelName" htmlFor="">Limit</label>
                            <div className="filter_item_list">

                                <div className="filterItem">
                                    <h3 className="filterText">{limit ? limit : "All"}</h3>
                                </div>
                            </div>
                        </div>
                        <div>


                            <label className="labelName" htmlFor="">Sort By</label>
                            <div className="filter_item_list">

                                <div className="filterItem">
                                    <h3 className="filterText">{sort === -1 ? "New" : "Old"}</h3>
                                </div>
                            </div>
                        </div>
                        <div>


                            <label className="labelName" htmlFor="">Ratings</label>
                            <div className="filter_item_list">

                                <div className="filterItem">
                                    <h3 className="filterText">{rating}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="search_results">
                    <span className={"resultFoundText"}> Search Results  </span>
                </div> */}
            </div>
        </>
    )
}

export default FilteredUi