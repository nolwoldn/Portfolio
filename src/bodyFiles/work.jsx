import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import ".././static/css/work.css";
import djangoLogo from "../static/images/djangoLogo.png";

function Work() {
  const [mouseCords, setMouseCords] = useState({ x: 0, y: 0 });
  const imageWidtHeight = 74;

  useEffect(() => {
    document.title = "My Work";
  }, []);

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
      <div className="work-text-div">
        <h1
          className="work-text"
          style={{
            "--x": `${mouseCords.x}px`,
            "--y": `${mouseCords.y}px`,
          }}
        >
          I'm a new developer and this project for learning like my other{" "}
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
              textShadow: "var(--x) var(--y) 0.0625em rgb(35, 215, 101)",
            }}
            to="/contact"
            className="work-text-links contact-link"
          >
            Contact
          </NavLink>
          .
        </h1>
        <div className="bottom-buttons">
          <button className="bottom-button browse">Browse skills</button>
          <NavLink to={"/contact"}>
            <button className="bottom-button">Contact me</button>
          </NavLink>
        </div>
      </div>

      <div className="bottom-cards">
        <div className="card">
          <section className="card-left">
            <h2 className="card-head">
              <span
                className="card-num"
                style={{
                  background:
                    "linear-gradient(45deg, rgb(0, 216, 255), rgb(0 0 0),rgb(255, 165, 0) ,rgb(103, 103, 255))",
                }}
              >
                1.
              </span>{" "}
              Frontend
            </h2>
            <p className="card-desc">
              Things like frame works and languages I know for front end
            </p>
          </section>
          <section className="card-right">
            <FaReact size={imageWidtHeight} color="rgb(0, 216, 255)" />
            <FaJsSquare size={imageWidtHeight} />
            <FaHtml5 size={imageWidtHeight} color="orange" />
            <FaCss3Alt size={imageWidtHeight} color="rgb(103, 103, 255)" />
          </section>
        </div>
        <div className="card">
          <section className="card-left">
            <h2 className="card-head">
              <span
                className="card-num"
                style={{
                  background: "linear-gradient(45deg , black , white)",
                }}
              >
                2.
              </span>{" "}
              Backend
            </h2>
            <p className="card-desc">
              The frame work I am familiar with for backend
            </p>
          </section>
          <section className="card-right">
            <img
              src={djangoLogo}
              width={`${imageWidtHeight}px`}
              height={`${imageWidtHeight}px`}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Work;
