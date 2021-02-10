import React from 'react'
import { data } from '../../data'
import Project from '../project/Project'
import './Main.scss'

const Main = () => {
  const section = data.map((data) => (
    <Project
      name={data.name}
      description={data.description}
      github={data.github}
      website={data.website}
      imgName={data.imgName}
    />
  ))
  
  return(
    <main>
      <div className="header">
        Check out my recent works!
      </div>
      <div className="projects">
        {section}
      </div>
    </main>
  )
}

export default Main