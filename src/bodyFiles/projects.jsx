import { useEffect } from "react";

function Projects(){
    useEffect(()=>{
        document.title = 'My projects';
    },[]);
    return(
        <div className="projects-full-container">

        </div>
    )
}
export default Projects;