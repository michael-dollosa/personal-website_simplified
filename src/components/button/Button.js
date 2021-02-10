import React from 'react'
import './Button.scss'
const Button = ({label, link, type}) => {

  return(
    <div className="button-component">
      
      <a 
        href={link}
        className={type==="github" ? "github" : "website"}
        target="_blank"
      >
      {label}
      </a>
      
    </div>
    
  )
}

export default Button