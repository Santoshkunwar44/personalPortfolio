import "./navbar.css"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
const Navbar = () => {

    const location = useLocation().pathname
    const [hideNav, sethideNav] = useState(true)
    const pathName = useLocation().pathname
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)

        }
    }, [])




    function handleScroll() {
        let scrollY = window.scrollY;

        if (scrollY > 150) {

            sethideNav(false)
        } else {
            sethideNav(true)
        }

    }


    function isActiveLink(navLink) {
        if (navLink === pathName) {
            return "activeNav"
        }
    }

    return (
        <div className={`navbar ${!hideNav ? "blurNav" : ""} ${location !== "/" && "blurNav"}`}>
            <div className="nav_left"  >
                <img onClick={() => window.scrollTo(0, 0)} draggable={"false"} width={"115px"} src="/assets/images/logoMain.png" alt="logo" />
            </div>
            <div className="nav_right">
                <ul className='nav_list'>
                    <Link to={'/'} className={`link navLink ${isActiveLink("/")}`}>
                        <li className='nav_list_item'>Dashboard</li>
                    </Link>
                    <Link className={`link navLink ${isActiveLink("/technology")}`} to={"/technology"}>
                        <li className='nav_list_item'>Technologies</li>
                    </Link>
                    <Link className={`link navLink ${isActiveLink("/projects")}`} to={"/projects"}>
                        <li className='nav_list_item'>Projects and works</li>
                    </Link>
                    <Link className={`link navLink ${isActiveLink("/contact")}`} to={"/contact"}>
                        <li className='nav_list_item'>Contact</li>
                    </Link>

                </ul>
            </div>


        </div>
    )
}

export default Navbar