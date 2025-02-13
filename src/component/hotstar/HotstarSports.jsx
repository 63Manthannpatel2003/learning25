import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarSports = () => {
  return (
    <div style={{textAlign:"center",height:"100px",backgroundColor:"brown"}}>
    <h1>Hotstar Sports</h1>
    <ul>
    <li><Link to="/play/100090">India-ENG ODI</Link></li>
    <li><Link to="/play/">ok</Link></li></ul></div>
  )
}
