import { createStore } from "redux"
import rootReducer from '../reducer'
import persistStore from "redux-persist/es/persistStore"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

const persistor = persistStore(store);

export { store, persistor }