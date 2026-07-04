import { useState,useEffect } from "react";

function Work(){
    useEffect(()=>{
        document.title = "My Work"
    },[])
    return(
        <div className="work-full-container">
            
        </div>
    )
}

export default Work;