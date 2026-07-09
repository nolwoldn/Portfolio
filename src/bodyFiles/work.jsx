import { useState, useEffect, useRef } from "react";
import { BrowserRouter as NavLink } from "react-router-dom";
import ".././static/css/work.css";
import "devicon/devicon.min.css";

function Work() {
  const [mouseCords, setMouseCords] = useState({ x: 0, y: 0 });
  const imageWidtHeight = 74;
  const bottomEl = useRef(null);

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
      window.removeEventListener("mousemove", currLoc);
    };
  }, []);

  const scrollToBottom = () => {
    bottomEl.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

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
          <button
            onClick={() => {
              scrollToBottom();
            }}
            className="bottom-button browse"
          >
            Browse skills
          </button>
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
                    "linear-gradient(45deg, rgb(0, 216, 255), rgb(0, 0 ,0),rgb(255, 165, 0) ,rgb(103, 103, 255))",
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
            <i
              className="devicon-react-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
            <i
              className="devicon-javascript-plain"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
            <i
              className="devicon-html5-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
            <i
              className="devicon-css3-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
          </section>
        </div>
        <div className="card">
          <section className="card-left">
            <h2 className="card-head">
              <span
                className="card-num"
                style={{
                  background:
                    "linear-gradient(45deg , rgb(0, 0, 0) , rgb(255, 255, 255))",
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
            <i
              className="devicon-django-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
          </section>
        </div>
        <div ref={bottomEl} className="card">
          <section className="card-left">
            <h2 className="card-head">
              <span
                className="card-num"
                style={{
                  background:
                    "linear-gradient(45deg , rgb(0, 255, 0) , rgb(234, 45, 46),rgb(0, 68, 130))",
                }}
              >
                3.
              </span>{" "}
              Future plans
            </h2>
            <p className="card-desc">
              Its the languages and frame works I am planning on learning
            </p>
          </section>
          <section className="card-right">
            <i
              className="devicon-nodejs-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
            <i
              className="devicon-java-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
            <i
              className="devicon-cplusplus-plain colored"
              style={{ fontSize: `${imageWidtHeight}px` }}
            ></i>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Work;
