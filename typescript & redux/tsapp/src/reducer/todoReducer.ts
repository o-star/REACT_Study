import { createReducer } from '@reduxjs/toolkit'
import { todo } from '../action'

export type stateType = {
  text: string
  id: string
}
const initState: stateType[] = []

const todoReducer = createReducer(initState, (builder) => {
  builder
    .addCase(todo.addTodo, (state, action) => {
      state.push(action.payload)
    })
    .addCase(todo.deleteTodo, (state, action) => {
      state.forEach((val, idx) => {
        if (val.id === action.payload) state.splice(idx, 1)
      })
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
