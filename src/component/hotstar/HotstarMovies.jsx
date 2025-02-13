import React from 'react'
import { Link } from 'react-router-dom'

export const HotstarMovies = () => {
  return (
    <div style={{textAlign:"center",height:"100px",backgroundColor:"green"}}>
    <h1>Hotstar Movies</h1>
    <ul>
      <li><Link to="/play/playmoneyhiest">Money heist </Link></li>
      <li><Link to="/play">ok</Link></li>
    </ul>
    </div>
  )
}
