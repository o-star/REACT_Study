import React from 'react'
import { useSelector } from 'react-redux'
import { rootReducerType } from '../reducer'

export default function Todos() {
  // const dispatch = useDispatch()
  const todos: string[] = useSelector((state: rootReducerType) => state.todos)

  return (
    <>
      <h2>To-do List</h2>
      {todos.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
    </>
  )
}
