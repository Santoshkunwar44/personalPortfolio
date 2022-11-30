import "./sm_sidebar.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const SmSidebar = () => {
    return (
        <div
            className='sm_sidebar'>
            <div className="sm_sidebarTop">

                <div className="sm_sidebar_profile">
                    <img className={"sm_sidebar_profileImage"} src="assets/images/user.jpg" alt="userprofile" />
                </div>
                <div className="sm_sidebar_other_info">

                    <div className="current_pages">
                        <span>Home Page</span>
                        <ExpandMoreIcon className="sm_sidebar_expandIcon" />
                    </div>
                    {/* <div className="go_up_arrow">
                        <img src="https://img.icons8.com/stickers/100/000000/up-squared.png" />
                        <span>Scroll up</span>
                    </div> */}

                </div>
            </div>
            <div className="sm_sidebar_media_icon">

                <a target="_blank" href="https://www.facebook.com/santosh.kunwar.33234571/">
                    <img className='sm_sidebarIcion' src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>
                <a target={"blank"} href="https://github.com/Santoshkunwar44">
                    <img className='sm_sidebarIcion' src="https://img.icons8.com/ios-filled/50/000000/github.png" />
                </a>
                <img className='sm_sidebarIcion' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
                <a target={"_blank"} href="https://www.youtube.com/channel/UC6SJzKH2SVzWa7lo7kzni8A">
                    <img className='sm_sidebarIcion' src="https://img.icons8.com/3d-fluency/50/000000/youtube-play.png" />
                </a>
                <img width={"65px"} className='sm_sidebarIcion' src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
            </div>
        </div>
    )
}

export default SmSidebar