import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project({project}) {

  
  const [background,setBackground]=useState(false)
  const className=project.id===1?"jeopardyContainer" : project.id===2 ? "bookContainer" : "choreContainer"

  return (<div onMouseEnter={()=>setBackground(true)} onMouseLeave={()=>setBackground(false)} className={background ? className+"Empty" : className}>
    <div className="aboveTheButtons">
      <div className={background ? "noInfo" : null}>
        <h4 className="projectName">{project.name}</h4>
        <p className="projectDescription">{project.description}</p>
      </div>
    {/* {project.id===1 ? <img src={require("../Jeopardy.png")}  alt={project.id} className="projectImg"/> 
    : project.id===2 ? <img src={require("../Book-club.png")} alt={project.id} className="projectImg"/> 
    : <img src={require("../chore-tracker.png")} alt={project.id} className="projectImg"/>} */}
    </div>
    <div>
      <a className="demoButton">Demo</a>
      <a className="githubButton">
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
    
    </div>
    </div>
  )
}

export default Project