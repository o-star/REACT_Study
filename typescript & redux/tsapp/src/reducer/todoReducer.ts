import { todo } from '../action'

const initState = ['soccer', 'report']

export default function todoReducer(
  state: string[] = initState,
  action: todo.todoType
) {
  switch (action.type) {
    case todo.ADD_TODO:
      return [...state, action.payload]
    default:
      return state
  }
}
