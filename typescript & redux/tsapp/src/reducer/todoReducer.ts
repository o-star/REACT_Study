import { createReducer } from '@reduxjs/toolkit'
import { todo } from '../action'

const initState = ['soccer', 'report']

const todoReducer = createReducer(initState, (builder) => {
  builder
    .addCase(todo.addTodo, (state, action) => {
      state.push(action.payload)
    })
    .addDefaultCase((state, action) => {})
})
export default todoReducer
//redux-toolkit createReducer code

// export default function todoReducer(
//   state: string[] = initState,
//   action: todo.todoType
// ) {
//   switch (action.type) {
//     case todo.addTodo.toString():
//       return [...state, action.payload]
//     default:
//       return state
//   }
// }
//original Reducer code
