import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello TS & Redux-saga</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </div>
  )
}

export default App
