import "./footer.css"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <section className='footer'>

            <div className="footer_wrapper">
                <ul className={"left"}>
                    <li> # Personal Developers portfolio</li>
                    <li>Santosh kunwar </li>
                    <a className="link" href="https://gmail.com" target={'_blank'}> <li>santehero@gmail.com</li></a>
                    <a className="link" target={"_blank"} href="https://www.google.com/maps/place/%E0%A4%AC%E0%A5%81%E0%A4%9F%E0%A4%B5%E0%A4%B2/@27.6821974,83.3624953,12z/data=!3m1!4b1!4m5!3m4!1s0x3996864275d9755f:0x2b1e92d89d4bb3ae!8m2!3d27.6865838!4d83.4322634">
                        <li>Rupandehi , Butwal</li></a>
                </ul>
                <ul className={"mid"}>
                    <Link className="link" to={`/projects/React Js_Node js`}>
                        <li>MERN STACK APPLICATION</li>
                    </Link>
                    <Link className="link" to={`/projects/React Js`}>
                        <li>React Applications</li>
                    </Link>
                    <Link className="link" to={`/projects/Python_Django`}>
                        <li>Python and Django Application</li>
                    </Link>
                    <Link className="link" to={`/projects/Javascript`}>
                        <li>  Javascript Application</li>
                    </Link>


                </ul>
                <ul>
                    <div className='right'>
                        <div className={"footer_social_media_wrapper"}>

                            <a target="_blank" href="https://www.facebook.com/santosh.kunwar.33234571/"> <img className='footer_social_media_icon' src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>
                            <a target={"blank"} href="https://github.com/Santoshkunwar44">

                                <img className='footer_social_media_icon' src="https://img.icons8.com/ios-filled/50/000000/github.png" />
                            </a>
                            <img className='footer_social_media_icon' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" />
                            <a target={"_blank"} href="https://www.youtube.com/channel/UC6SJzKH2SVzWa7lo7kzni8A">

                                <img className='footer_social_media_icon' src="https://img.icons8.com/3d-fluency/50/000000/youtube-play.png" />
                            </a>
                            <img className='footer_social_media_icon' src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
                        </div>
                        <ul>
                            <li>Created @ 2022</li>
                        </ul>
                    </div>
                </ul>
            </div>

        </section>
    )
}

export default Footer