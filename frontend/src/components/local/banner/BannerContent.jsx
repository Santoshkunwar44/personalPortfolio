import LoginModal from "../../global/modal/LoginModal/LoginModal"
import GuidePop from "../../global/popover/Initial"
import Pops from "../../global/popover/Popover"
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import "./banner.css"
import { useEffect, useState } from "react";
// function Scene() {
//     return (
//         <mesh >
//             <boxGeometry attach="geometry" args={[1, 1, 1]} />
//             <meshBasicMaterial attach="material" color="red" />
//         </mesh>
//     );
// }
// function Scene2() {
//     return (
//         <mesh position={[2, 1, 1]}>
//             <boxGeometry attach="geometry" args={[1, 1, 1]} />
//             <meshBasicMaterial attach="material" color="red" />

//         </mesh>
//     );
// }



const BannerContent = () => {


    const [animateWidth, setAnimateWidth] = useState(window.innerWidth / 2)

    useEffect(() => {


        window.addEventListener("resize", () => {
            setAnimateWidth(window.innerWidth / 2)
        })




    }, [])

    return (
        <>
            <div className='banner' style={{ width: `${animateWidth}px` }}>
                <div className="banner_user_profile">
                    <div className="img_animate js">
                        <img draggable={"false"} src="data:image/png;base64,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" />
                    </div>
                    <div className="python img_animate">
                        <img draggable={"false"} width={'120px'} src="https://img.icons8.com/3d-fluency/375/null/3d-fluency-python.png" />
                    </div>
                    <div className="img_animate java">
                        <img draggable={"false"} src="data:image/png;base64,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"></img>
                    </div>

                    <div className="banner_user_imageBox">
                        <img draggable={"false"} src="/assets/images/user.jpg" alt="user_photo" />
                    </div>
                    <div className="banner_user_info">
                        <h3 className="banner_user_info_main"> <h2 className="brainy">Brainy </h2> <h3 className="fullStack">Fullstack Developer</h3>  </h3>
                        <h3 className="developerName"> [ SANTOSH KUNWAR ]</h3>
                        <div className="banner_user_info_desc">

                            <p>Nice meeting you Online !!</p>
                            <p>I'm an IT enthusiast ,  been graduating in Bachelor in Computer Application (BCA)
                                Intimacy with the Web technologies , obsessed with computer books & affection with bugs</p>
                            <p>Mind Blowing projects are my experiences in which  you should your eyes  on </p>
                            <button className='cv_button bannerCvButton  bannerButton'> <SimCardDownloadIcon className={"bannerCvDownloadIcon "}
                            /> <span>Download Cv</span></button>
                        </div>
                    </div>
                </div>
                <div className="banner_animations">

                </div>
            </div>
        </>
    )
}


export default BannerContent


