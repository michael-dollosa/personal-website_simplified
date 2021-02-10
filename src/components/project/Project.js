import React, { Fragment } from 'react'
import Button from '../button/Button'
import './Project.scss'


const Project = ({name, description, github, website, imgName}) => {
  const projectImg = () => {
    switch (imgName) {
      case "validations":
        return "validations";
      break;
      
      case "pomodoree":
        return "pomodoree";
      break;

      default:
        break;
    }
  }
  
  
  return(
    <div className="project-container">
      <div className="details">
        <label>{name}</label>
        <p>
            {description}
        </p>
          
        <div className="buttons">
          <Button label="Github Repo" link={github} type="github"/>
          <Button label="View Website" link={website} type="website"/>
        </div>
      </div>

      <div className="image-container">
          <div className={`image ${projectImg()}`}>
          
          </div>
      </div>
    </div>
  )
}

export default Project