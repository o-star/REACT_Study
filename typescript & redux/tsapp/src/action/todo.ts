import { createAction, nanoid } from '@reduxjs/toolkit'

const addTodo = createAction(
  'TSAPP/todoReducer/ADD_TODO',
  function prepare(text: string) {
    return {
      payload: {
        text,
        id: nanoid(),
      },
    }
  }
)
const deleteTodo = createAction<string>('TSAPP/todoReducer/DELETE_TODO')
//redux-toolkit createAction code

// const ADD_TODO = 'TSAPP/todoReducer/ADD_TODO'
// const DELETE_TODO = 'TSAPP/todoReducer/DELETE_TODO'

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
