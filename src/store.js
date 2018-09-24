import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counter from './ducks/counter'
import userReducer from './ducks/userReducer'
import promiseMiddleware from '../node_modules/redux-promise-middleware'

// counter (reducer) passing in as argument
const store = createStore(counter)
const combineReducers = combineReducers({
  user: userReducer,
  counter,
})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose
const enhanceres = composeEnhancers(applyMiddleware(promiseMiddleware()))

export default store
