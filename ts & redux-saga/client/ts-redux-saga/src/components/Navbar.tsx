import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <ul id="nav-list">
      <Link className="nav-elem" to="/">HOME</Link>
      <Link className="nav-elem" to="/counter">COUNTER</Link>
      <Link className="nav-elem" to="/todos">TODOS</Link>
    </ul>
  )
}
