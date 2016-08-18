import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { ping } from './enhancers/ping' // <!-- подключаем наш enhancer
import thunk from 'redux-thunk' // <-- добавили redux-thunk

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)) // <!-- добавляем его в цепочку middleware'ов

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}