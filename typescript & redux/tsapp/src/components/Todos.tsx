import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../action/todo'
import { rootReducerType } from '../reducer'
import '../styles/Todos.css'

export default function Todos() {
  const [inputs, setInputs] = useState<string>('')
  const dispatch = useDispatch()
  const todos: string[] = useSelector((state: rootReducerType) => state.todos)
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs(e.target.value)
  const onClickReg = () => dispatch(addTodo(inputs))

  return (
    <>
      <h2>To-do List</h2>
      <div id="input-sec">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          onChange={(e) => onChangeInput(e)}
        />
        <button onClick={onClickReg}>등록</button>
      </div>
      {todos.map((val, idx) => (
        <li key={idx}>{val}</li>
      ))}
    </>
  )
}
