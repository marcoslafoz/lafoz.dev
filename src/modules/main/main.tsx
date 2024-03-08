import React from 'react'
import './main.css'
import logo from '../../assets/img/logo.png'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {

  return (
    <div id="cont">
      <center>
        <div className='title'>
          <b>marcos</b>lafoz
        </div>
      </center>
    </div>
  )
}

