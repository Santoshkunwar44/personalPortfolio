import BannerAnimation from './BannerAnimation'
import "./banner.css"
import BannerContent from './BannerContent'

const BannerContainer = () => {
    return (
        <div className='banner_container'>

            <BannerContent />
            <BannerAnimation />
            <div className='social_media_icons'>

                <img className='socialMedia_icon' src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img className='socialMedia_icon' src="https://img.icons8.com/ios-filled/50/000000/github.png" />
                <img className='socialMedia_icon' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
                <img className='socialMedia_icon' src="https://img.icons8.com/3d-fluency/50/000000/youtube-play.png" />
                <img className='socialMedia_icon' src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
            </div>
        </div>
    )
}

export default BannerContainer