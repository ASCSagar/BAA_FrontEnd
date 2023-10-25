import "./App.css";
import FooTer from "./Components/Headers/FooTer";
import NavBar from "./Components/Headers/NavBar";
import HomePage from "./Components/Home/HomePage";
import "./assets/vendors/css/bundle.css";
import "./assets/css/style-default.css";
import AboutPage from "./Components/About/AboutPage";
import EventPage from "./Components/Event/EventPage";
import CareerPage from "./Pages/Career/CareerPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import BlogPage from "./Components/Blog/BlogPage";
import ContactPage from "./Components/Contact/ContactPage";
import CommitePage from "./Pages/Commitee/CommitePage";
import DirectoryPage from "./Pages/Directory/DirectoryPage";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import RightSidePage from "./Blog-Page/RightSideBar/RightSidePage";
import LeftSidePage from "./Blog-Page/LeftSideBar/LeftSidePage";
import NoSidePage from "./Blog-Page/NoSideBar/NoSidePage";
import TypoPage from "./Pages/Typography/TypoPage";
import SingleAlbPage from "./Pages/Galery/SingleAlbum/SingleAlbPage";
import "./assets/css/custom.css";
import IsLoading from "./Components/Loader/IsLoading";
import { useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import apidata from "./API/api";
import FaqPage from "./Pages/FAQ/FaqPage";
import ErrorOcc from "./Pages/Error/ErrorOcc";
import SingleGallery from "./Components/Gallery/SingleGallery";
import Single from "./Pages/Blog/Single";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faCalendar,
  faHouse,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import BlogBlog from "./Components/Blog/BlogBlog";
import PaymentRec from "./Components/PaymentRec";
function App() {
  const [loading, setLoading] = useState(true);
  const [siteData, setSiteData] = useState();
  const [error, setError] = useState("");

  const getAllData = async function () {
    const response = await apidata("site");
    if (response.status !== 200) {
      setError("Error Occured");
    }
    setSiteData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  if (loading) {
    return <IsLoading />;
  }

  return (
    <>
      {error ? (
        <ErrorOcc />
      ) : (
        <MyContext.Provider value={{ siteData: siteData }}>
          <Router>
            <div className="hideOver">
              <NavBar />

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/event" element={<EventPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/single-album" element={<SingleAlbPage />} />
                <Route path="/right-blog" element={<RightSidePage />} />
                <Route path="/left-blog" element={<LeftSidePage />} />
                <Route path="/nosidebar-blog" element={<NoSidePage />} />
                <Route path="/typography" element={<TypoPage />} />
                <Route path="/directory" element={<DirectoryPage />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/committee" element={<CommitePage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/gallery/:id" element={<SingleGallery />} />
                <Route path="/blog/:id" element={<Single />} />{" "}
                <Route path="/category/:catId" element={<BlogBlog />} />
                <Route path="/register" element={<PaymentRec />} />
              </Routes>
              <FooTer />
            </div>
            <div className="footerMobMenu">
              <ul>
                <li>
                  <NavLink to="/gallery">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-camera"
                    >
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <FontAwesomeIcon icon={faBlog} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FontAwesomeIcon icon={faHouse} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/event">
                    <FontAwesomeIcon icon={faCalendar} />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq">
                    <FontAwesomeIcon icon={faQuestion} />
                  </NavLink>
                </li>
              </ul>
            </div>
          </Router>
        </MyContext.Provider>
      )}
    </>
  );
}

export default App;
