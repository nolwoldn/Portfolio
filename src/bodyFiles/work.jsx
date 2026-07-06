import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import ".././static/css/work.css";

function Work() {
  useEffect(() => {
    document.title = "My Work";
  }, []);

  const [mouseCords, setMouseCords] = useState({ x: 0, y: 0 });
  const bottomCards = [{}]
  useEffect(() => {
    const currLoc = (event) => {
      let xPos = (event.clientX - 750) / -53;
      let yPos = (event.clientY - 400) / -40;

      setMouseCords({ x: xPos, y: yPos });
    };

    window.addEventListener("mousemove", currLoc);
    return () => {
      window.addEventListener("mousemove", currLoc);
    };
  }, []);

  return (
    <div className="work-full-container">
      <nav className="work-navigation"></nav>
      <div className="work-text-div">
        <h1
          className="work-text"
          style={{
            "--x": `${mouseCords.x}px`,
            "--y": `${mouseCords.y}px`,
          }}
        >
          I'm a new developer and this project for learning{" "}
          like my other{" "}
          <NavLink
            to="/projects"
            style={{
              textShadow: "var(--x) var(--y) 0.0625em rgb(116, 114, 221)",
            }}
            className="work-text-links"
          >
            Projects
          </NavLink>
          , please give me some recommendations at{" "}
          <NavLink
            style={{
              textShadow: "var(--x) var(--y) 0.0625em rgb(215, 214, 177)",
            }}
            to="/contact"
            className="work-text-links contact-link"
          >
            Contact
          </NavLink>
          .
        </h1>
      </div>
      <div className="bottom-cards"></div>
    </div>
  );
}

export default Work;
