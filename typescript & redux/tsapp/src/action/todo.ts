import { createAction } from '@reduxjs/toolkit'

const addTodo = createAction<string>('TSAPP/todoReducer/ADD_TODO')
const deleteTodo = createAction<string>('TSAPP/todoReducer/ADD_TODO')
//redux-toolkit createAction code

// const ADD_TODO = 'TSAPP/todoReducer/ADD_TODO'
// const DELETE_TODO = 'TSAPP/todoReducer/ADD_TODO'

// const addTodo = (payload: string) =>
//   ({ type: ADD_TODO, payload: payload } as const)
// const deleteTodo = (payload: string) =>
//   ({
//     type: DELETE_TODO,
//     payload: payload,
//   } as const)
// original Action type, Action creator code

export { addTodo, deleteTodo }
export type todoType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
