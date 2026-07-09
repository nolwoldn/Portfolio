import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../static/css/projects.css";
import lenderLogo from "../static/images/lenderLogo.svg";
import eLogo from "../static/images/E.png";

function Projects() {
  const [shadowPos, changeShadowPos] = useState({
    x: 0,
    y: 0,
  });
  let crrHoverColor = useRef("rgba(56, 191, 254, 0.26)");

  useEffect(() => {
    const findMousePos = (event) => {
      const xPos = (event.clientX - 250) / -53;
      const yPos = (event.clientY - 500) / -40;

      changeShadowPos({ x: xPos, y: yPos });
    };

    window.addEventListener("mousemove", findMousePos);

    return () => {
      window.removeEventListener("mousemove", findMousePos);
    };
  }, []);

  useEffect(() => {
    document.title = "My projects";
  }, []);
  return (
    <div className="projects-full-container">
      <div className="text-wrapper">
        <h3 className="projects-head">My projects</h3>
        <p
          className="projects-text"
          style={{
            "--x": `${shadowPos.x}px`,
            "--y": `${shadowPos.y}px`,
          }}
        >
          Over time I have made many projects all in the effort of bettering my
          coding skills, unfortunetly many of those projects aren't available on{" "}
          <NavLink
            to={"https://github.com/nolwoldn?tab=repositories"}
            className="Github-link"
            target="_blank"
          >
            Github
          </NavLink>{" "}
          as I didn't even know how to use it then, but I have since learned and
          have posted a couple of my on going projects on the site.
        </p>
      </div>

      <div
        className="bottom-cards"
        style={{
          "--crrColor": crrHoverColor.current,
        }}
      >
        <NavLink
          to={"https://github.com/nolwoldn/Lender-Web"}
          className="proj-card"
          target="_blank"
          onMouseEnter={() => {
            crrHoverColor.current = "rgba(56, 191, 254, 0.26)";
          }}
        >
          <div className="proj-card-left">
            <h2 className="proj-card-heading">E-comerce</h2>
            <p className="proj-card-desc">
              Its not a real e-commerce website its an immitation without the
              money
            </p>
          </div>
          <div className="proj-card-right">
            <img width="70px" height="70px" src={lenderLogo}></img>
          </div>
        </NavLink>
        <NavLink
          to={"https://github.com/nolwoldn/Portfolio"}
          className="proj-card"
          target="_blank"
          onMouseEnter={() => {
            crrHoverColor.current = "rgb(116, 114, 221)";
          }}
        >
          <div className="proj-card-left">
            <h2 className="proj-card-heading">This website</h2>
            <p className="proj-card-desc">
              This is like a mix between a clone and an actuall portfolio
            </p>
          </div>
          <div className="proj-card-right">
            <img
              width="70px"
              height="70px"
              style={{ borderRadius: "12px" }}
              src={eLogo}
            ></img>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
