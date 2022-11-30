import Project from '../../local/project/Project'
import "./theProject.css"

const TheProjects = ({ title, item, toolsPage }) => {
    return <div className='theProject'>
        {
            (item?.length > 0) ? <>

                <div className="projectsHeader">
                    <h3 className='section_title'>{title} </h3>

                </div>

                <div className='theProjectContainer'>
                    {
                        toolsPage ? item?.map(project => <Project mid={true} item={project} key={project._id} />) :
                            item?.slice(0, 5).map(project => <Project mid={true} item={project} key={project._id} />)
                    }
                </div>
                {/* {
                            !toolsPage && <div className='viewMoreBox'>
                                <button className="viewMore">View More</button>
                            </div>
        
                        } */}
            </>
                : ""
        }



    </div>
}

export default TheProjects