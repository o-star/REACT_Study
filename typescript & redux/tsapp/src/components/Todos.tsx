import React, { MouseEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from '../action/todo'
import { rootReducerType } from '../reducer'
import { stateType } from '../reducer/todoReducer'
import '../styles/Todos.css'

export default function Todos() {
  const [inputs, setInputs] = useState<string>('')
  const dispatch = useDispatch()
  const todos: stateType[] = useSelector(
    (state: rootReducerType) => state.todos
  )
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs(e.target.value)
  const onClickReg = () => dispatch(addTodo(inputs))
  const onClickDel = (e: MouseEvent) => dispatch(deleteTodo(e.currentTarget.id))

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
      {todos.map((val) => (
        <li key={val.id} className="todo-li">
          {val.text}
          <button
            className="delete-todo-btn"
            id={val.id}
            onClick={(e) => onClickDel(e)}
          >
            삭제
          </button>
        </li>
      ))}
    </>
  )
}
