import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../styles/Counter.css'
import Test from './Test'

export default function Counter() {
  const [count, setCount] = useState(0)
  const onClickPlus = () => setCount(count + 1)
  const onClickMinus = () => setCount(count - 1)

  return (
    <>
      <h2>Counter</h2>
      <div>
        <h3>{count}</h3>
        <div>
          <button className="cnt-btn" onClick={onClickPlus}>
            +
          </button>
          <button className="cnt-btn" onClick={onClickMinus}>
            -
          </button>
        </div>
      </div>
      <div>
        <Link to="current">Current</Link>
      </div>
      <Routes>
        <Route path="/current" element={<Test />} />
      </Routes>
    </>
  )
}
