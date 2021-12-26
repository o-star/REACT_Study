import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const plusCount = () => setCount(count + 1)
  const minusCount = () => setCount(count - 1)

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={plusCount}>+</button>
        <button onClick={minusCount}>-</button>
      </div>
    </div>
  )
}

export default Counter