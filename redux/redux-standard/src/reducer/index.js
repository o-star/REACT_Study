import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// Redcer-Persist
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";  //session storage
//import storage from "redux-persist/lib/storage";  //local storage

const persistConfig = {
  key: "root",
  storage: sessionStorage
}

const rootReducer = combineReducers({
  todos: todoReducer
})

export default persistReducer(persistConfig, rootReducer)
// export default rootReducer