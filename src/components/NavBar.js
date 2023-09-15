import {NavLink,useHistory} from 'react-router-dom'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {

    const [isOpen,setIsOpen] = useState(false)
    const history = useHistory()

    function toggleClass(){
      setIsOpen(!isOpen)
    }

    return <header>
          
          <div className="nameContainer">
              <h2 className="name" onClick={()=>{history.push('/')}}>BRIAN ROSEN</h2>
            </div>
      <div className="navBar">

     

      <div className="navigation" >
        <ul className="navLinks" >
          <li>
            <NavLink
            className="navOption"
            to="/projects"
            exact>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="/resume"
            exact>
              Resume
            </NavLink>
          </li>
          <li className="socials">
          <div className="socialLink">
                <a href="http://www.linkedin.com/in/brian-rosen-eit/">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
            </div>
            <div className="socialLink">
                <a href="http://github.com/bwrosen20">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="navBars" onClick={toggleClass}>
        {isOpen ? <FontAwesomeIcon icon="fa-solid fa-x" /> : <FontAwesomeIcon icon="fa-solid fa-bars" />}
      </div>
      </div>
      <div className={isOpen ? "dropdownMenuOpen" : "dropdownMenu"} onClick={toggleClass}>
          <li>
            <NavLink
            className="navOption"
            to="projects"
            exact>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
            className="navOption"
            to="resume"
            exact>
              Resume
            </NavLink>
          </li>
          <li className="socials">
          <div className="socialLink">
                <a href="http://www.linkedin.com/in/brian-rosen-eit/">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
            </div>
            <div className="socialLink">
                <a href="http://github.com/bwrosen20">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
            </div>
          </li>

      </div>
      </header>
  }
  
  export default NavBar;