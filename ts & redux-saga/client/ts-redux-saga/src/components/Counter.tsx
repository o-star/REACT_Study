import React, { useEffect, useState } from 'react'
import getCountAPI from '../lib/api'

export default function Counter() {
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(0)

  useEffect(() => {
    getCountAPI().then((res: number) => {
      setCount(res)
      setLoading(false)
    })
  }, [loading])

  return (
    <>
      {loading ? <h2>Loading...</h2> : <h2>{count}</h2>}
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </>
  )
}
