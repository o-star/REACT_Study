const ADD_TODO = 'TSAPP/todoReducer/ADD_TODO'
const DELETE_TODO = 'TSAPP/todoReducer/ADD_TODO'

const addTodo = (payload: string) =>
  ({ type: ADD_TODO, payload: payload } as const)
const deleteTodo = (payload: string) =>
  ({
    type: DELETE_TODO,
    payload: payload,
  } as const)

export { ADD_TODO, DELETE_TODO, addTodo, deleteTodo }
export type todoType =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
