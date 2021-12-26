import {TODO_ADD} from '../action/todo'

export default function todoReducer(state = [], action) {
  switch(action.type) {
    case TODO_ADD:
      return [...state, action.text]
    default:
      return state
  }
}