import { createStore } from 'redux'
import persistStore from 'redux-persist/es/persistStore'
import rootReducer from '../reducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux dev-tools
)

const persistor = persistStore(store)

export { store, persistor }
