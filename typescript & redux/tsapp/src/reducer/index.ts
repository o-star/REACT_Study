import { combineReducers } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import sessionStorage from 'redux-persist/es/storage/session'
import todoReducer from './todoReducer'

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    todos: todoReducer,
  })
)

export default rootReducer
export type rootReducerType = ReturnType<typeof rootReducer>
