import { useState } from "react";
import { XLg } from "react-bootstrap-icons";


const Nav = () => {

    const [display, setDisplay] = useState("none")

    const navshow = () => {
        setDisplay("flex")
    }

    const navhide = () => {
        setDisplay("none")
    }

    return (
        <nav className="nav">
            {/* logo */}
            <div className="logo_wrapper">
                <div className="logo_text_wrap1">
                    <span className="logo_text1">DO</span>
                </div>
                <div className="logo_text_wrap2">
                    <span className="logo_text2">KI</span>
                </div>
            </div>

            {/* navigation menu */}
            <div className="nav_menu">

                <div className="menu">
                    <li style={{ color: "#6B006B" }}>Home</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </div>
                {/* desktop ctn */}
                <div className="ctn_wrapper">
                    <a href="" className="ctn">Join The Waitlist</a>
                </div>
            </div>
            {/* mobile ctn */}
            <a href="" className="mob_ctn">JOIN THE WAITLIST</a>

            <div className="mob_ham_wrap" onClick={navshow}>
                <div className="ham"></div>
                <div className="ham" ></div>
                <div className="ham"></div>
            </div>

            {/* mobile navgiation menu */}
            <div className="mob_wrap" style={{ display: display }}>
                <div className="mob_exit_wrap" >
                    <div className="mob_exit" onClick={navhide}>
                        <XLg />
                    </div>
                </div>

                <div className="mob_menu_wrap" >
                    <a href="" className="mob_list">Home</a>
                    <a href="" className="mob_list">FAQ</a>
                    <a href="" className="mob_list">Blog</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;