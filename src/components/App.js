import React, { Fragment } from 'react'
import Header from './header/Header'
import './App.scss'
import Main from './main/Main'
import Footer from './footer/Footer'

const App = () => {
  return(
    <div className="flex-container">

      <div className="header-container">
        <div className="header-main">
          <Header />
        </div>
      </div>

      <div className="container">
        <Main />
      </div>

      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default App