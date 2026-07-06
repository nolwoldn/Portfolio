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

  useEffect(() => {
    const currLoc = (event) => {
      const xPos;
      const yPos;

      

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
            "--shadowCol": "rgba(0, 0, 0, 0.2)",
          }}
        >
          Hello, I'm a new developer and I'm using this project for learning{" "}
          like my other{" "}
          <NavLink to="/projects" className="work-text-links">
            Projects
          </NavLink>
          , if you want please give me some recommendations at{" "}
          <NavLink to="/contact" className="work-text-links">
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
