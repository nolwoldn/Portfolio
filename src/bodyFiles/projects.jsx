import { useEffect } from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    document.title = "My projects";
  }, []);
  return (
    <div className="projects-full-container">
      <div className="text-wrapper">
        <h3 className="projects-head">My projects</h3>
        <p className="projects-text">
          Over the time I have spent learning how to code I have made many
          projects all in the effort of learning, unfortunetly many of those
          projects aren't available on{" "}
          <NavLink className="work-links" >Github</NavLink> as I didn't even know
          how to use it then, but I have learned and have posted a couple of my
          on going projects on the site
        </p>
      </div>
    </div>
  );
}

export default Projects;
