import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo/Baalogo.png";
import { NavLink, useLocation } from "react-router-dom";
import { MyContext } from "../../MyContext";

export default function NavBar() {
  const { siteData } = useContext(MyContext);

  const sitedata = siteData.home.menu[0];
  const [click, setClick] = useState(false); // vto close open mob menu
  const location = useLocation().pathname;
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
  function handelNavClick() {}

  return (
    <>
      <header
        className={`site-header header-fixed ${stickyClass}`}
        data-responsive-width="991"
      >
        <div className="container-fluid" id="">
          <div
            className={`site-logo ${
              click && window.innerWidth < 776 ? "displayNone" : ""
            }`}
          >
            <a href="/" className="logo">
              <img src={logo} alt="site logo" className="main-logo" />
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
                    <a
                      href="/baa2/lifetime-membership-registration"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Register
                    </a>
                  </li>
                  <li className="menu-item-depth-0">
                    <a href={"/baa2"} target="_blank" rel="noreferrer">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
