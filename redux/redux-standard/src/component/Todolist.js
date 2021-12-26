import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../action/todo"

export default function Todolist() {

  const todos = useSelector(state => state.todos)
  const [inputs, setInputs] = useState("")
  const dispatch = useDispatch()
  const onRegister = () => {
    dispatch(addTodo(inputs))
  }

  const elemList = todos.map((val, idx) => <li key={idx}>{val}</li>)

  return (
    <>
      <h2>Todos</h2>
      <div>
        <input type="text" placeholder="할일을 입력하세요" onChange={(e) => setInputs(e.target.value)} />
        <button onClick={onRegister}>등록</button>
      </div>
      <div>
        {elemList}
      </div>
    </>
  )
}