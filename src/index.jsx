import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./static/css/header.css";
import Elogo from "./static/images/E.png";
import { useState } from "react";
//packages
import Home from "./bodyFiles/home.jsx";
import Work from "./bodyFiles/work.jsx";
import Projects from "./bodyFiles/projects.jsx";
import Contact from "./bodyFiles/contact.jsx";
import NotFound from "./bodyFiles/pageNotFound.jsx";

import { createRoot } from "react-dom/client";

function Head() {
  let [textIndex, changeTextIndex] = useState(-1);
  const location = useLocation();

  const showNavBar =
    location.pathname === "/" ||
    location.pathname === "/work" ||
    location.pathname === "/projects" ||
    location.pathname === "/contact";
  const items = [
    {
      Text: "Home",
      link: "/",
    },
    {
      Text: "Work",
      link: "/work",
    },
    {
      Text: "Project",
      link: "/projects",
    },
    {
      Text: "Contact",
      link: "/contact",
    },
  ];
  const colors = [
    "rgb(255, 14, 62)",
    "rgb(254, 225, 109)",
    "rgb(116, 114, 221)",
    "rgb(35, 215, 101)",
  ];
  const [logo, changeLogo] = useState(Elogo); // alows interchangable logos between files

  return (
    <div id="headBody">
      {showNavBar && (
        <div className="header">
          <div className="logo">
            <div>
              <img src={logo} className="image" alt="E" />
            </div>
            <div className="header-intro">
              <strong className="header-text">nolwoldn</strong>
              <em className="header-text">learning student</em>
            </div>
          </div>
          <div className="links">
            {items.map((item, idx) => (
              <NavLink
                className="header-link header-text"
                to={item.link}
                style={({ isActive }) => ({
                  "--underlineColor": colors[idx],
                  "--scale": textIndex === idx || isActive ? "1" : "0",
                })}
                onMouseEnter={() => changeTextIndex(idx)}
                onMouseLeave={() => changeTextIndex(-1)}
                key={idx}
              >
                {item.Text}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/*If all else fails */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Index() {
  return (
    <Router>
      <Head />
    </Router>
  );
}

createRoot(document.getElementById("root")).render(<Index />)
