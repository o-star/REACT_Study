import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <ul id="navbar-ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/clock">Clock</Link>
      </li>
      <li>
        <Link to="/todos">Todo</Link>
      </li>
    </ul>
  )
}
