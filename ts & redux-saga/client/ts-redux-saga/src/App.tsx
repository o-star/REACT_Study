import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello TS & Redux-saga</h1>
      <Navbar />
      <Routes>
        <Route path="counter" element={<Counter />} />
      </Routes>
    </div>
  )
}

export default App
