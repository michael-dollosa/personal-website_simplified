import React from 'react'
import './Header.scss'
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return(
    <header>
      <div className="image">
      
      </div>
      <div className="title">
        Hi, I'm <span className="highlight-primary">Dolee.</span>
      </div>
      <div className="description">
        I am a former Service Level Manager under Information Technology and Services industry and is now on the path of career change. Currently studying and making projects using <span className="highlight-green">React JS</span>.

      </div>
      <IconContext.Provider value={{ size: '2rem',className: 'react-icons' }}>
      <div className="links">
        <a href="https://github.com/michael-dollosa" target="_blank"><FaGithub /></a>
         
        <a href="https://www.linkedin.com/in/michaeldollosa/" target="_blank"><FaLinkedin /></a>
      </div>
      </IconContext.Provider>
    </header>
  )
}

export default Header