import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Clock from './components/Clock'
import Home from './components/Home'
import Todos from './components/Todos'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello Typescript</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter/*" element={<Counter />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  )
}

export default App
