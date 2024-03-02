import React from 'react'
import './main.css'
import logo from '../../assets/img/logo.png'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {

  return (
    <div id="cont">
      <center>
        <img id="logo" src={logo} alt=''/>
          <p id="msg">Work in progress</p>
      </center>
    </div>
  )
}

