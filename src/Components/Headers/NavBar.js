import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo/Baalogo.png";
import TopBar from "./TopBar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MyContext } from "../../MyContext";

export default function NavBar() {
  const { siteData } = useContext(MyContext);

  // console.log(siteData.home.menu);
  const sitedata = siteData.home.menu[0];
  const [click, setClick] = useState(false); // vto close open mob menu
  const [navClick, setNavClick] = useState(false); // of no use
  const location = useLocation().pathname;
  // console.log(location);
  function handleClick() {
    setClick((prev) => !prev);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 776) setClick(false);
  }, [location]);
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250 ? setStickyClass("showed") : setStickyClass("");
    }
  };
  function handelNavClick() {
    // if (navClick == true) {
    //   setClick((prev) => !prev);
    // }
  }
  // useEffect(() => {
  //   // navClick ? setNavClick(false) : setNavClick(true);

  // }, [location]);

  return (
    <>
      <header
        className={`site-header header-fixed ${stickyClass}`}
        data-responsive-width="991"
      >
        {/* <TopBar /> */}

        <div className="container-fluid" id="">
          <div
            className={`site-logo ${
              click && window.innerWidth < 776 ? "displayNone" : ""
            }`}
          >
            <a href="/" className="logo">
              <img
                src={logo}
                alt="site logo"
                className="main-logo"
                // style={{ backgroundColor: "#d4efef" }}
              />
              <img src={logo} alt="site logo" className="logo-sticky" />
            </a>

            <div className="burger-menu" onClick={handleClick}>
              <span className="bar-one"></span>
              <span className="bar-two"></span>
              <span className="bar-three"></span>
            </div>
          </div>
          <div className="header-inner">
            <nav id="site-navigation" className="main-nav">
              {/* <!-- /.site-logo --> */}

              <div
                className={` menu-wrapper main-nav-container canvas-menu-wrapper ${
                  click ? "open-menu" : ""
                } `}
                id="mega-menu-wrap"
              >
                <div className="canvas-header">
                  <div className="mobile-offcanvas-logo">
                    <a href="/">
                      <img src={logo} alt="site logo" className="main-logo" />
                    </a>
                  </div>

                  <div
                    className="close-menu"
                    id="page-close-main-menu"
                    onClick={handleClick}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                </div>

                <ul className="codeboxr-main-menu">
                  <li>
                    <NavLink
                      to="/"
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                    >
                      {sitedata?.home}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                    >
                      {sitedata?.about}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/event"
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                    >
                      {sitedata?.event}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/gallery"
                    >
                      {sitedata?.gallery}
                    </NavLink>
                  </li>

                  <li className=" menu-item-depth-0">
                    <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/blog"
                    >
                      Blog
                    </NavLink>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link to="/blog">Blog List</Link>
                      </li>
                      <li>
                        <Link to="/right-blog">Single Blog Right Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/left-blog">Single Bolg Left Sidebar</Link>
                      </li>
                      <li>
                        <Link to="/nosidebar-blog">
                          Single Blog No Sidrebar
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li className="menu-item-depth-0">
                    <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/committee"
                    >
                      Committee
                    </NavLink>

                    {/* <ul className="sub-menu"> */}
                    {/* <li className="has-submenu">
                        <Link to="/gallery">Gallery</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/gallery">Gallery</Link>
                          </li>
                          <li>
                            <Link to="/single-album">Single Album</Link>
                          </li>
                        </ul> */}
                    {/* </li> */}
                    {/* <li>
                        <Link to="/committee">Committee</Link>
                      </li> */}
                    {/* <li>
                        <Link to="/directory">Directory</Link>
                      </li>
                      <li>
                        <Link to="/login">Register</Link>
                      </li> */}
                    {/* <li>
                        <Link to="/career">Career</Link>
                      </li>
                      <li>
                        <Link to="/typography">Typography</Link>
                      </li> */}
                    {/* </ul> */}
                  </li>
                  <li className="menu-item-depth-0">
                    <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="menu-item-depth-0">
                    <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/faq"
                    >
                      FAQ
                    </NavLink>
                  </li>
                  <li className="menu-item-depth-0">
                    {/* <NavLink
                      onClick={handelNavClick}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "activeClass" : ""
                      }
                      to="/register"
                    >
                      Register
                    </NavLink> */}
                    <a href="/lifetime-registration">Register</a>
                  </li>
                </ul>
              </div>
              {/* <!-- /.menu-wrapper --> */}
            </nav>
            {/* <!-- /.site-nav --> */}
          </div>
          {/* <!-- /.header-inner --> */}
        </div>
        {/* <!-- /.container-full --> */}
      </header>
    </>
  );
}
