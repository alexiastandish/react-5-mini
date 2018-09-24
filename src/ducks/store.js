import { createStore, combinedReducers, applyMiddleware } from 'redux'
import promiseMiddleWare from 'redux-promise-middleware'

import counter from './ducks/counter'
import userReducer from './ducks/userReducer'

const combinedReducers = combinedReducers({
  user: userReducer,
  counter,
})

const enhancers = applyMiddleware(promiseMiddleWare())

export default createStore(combinedReducers, enhancers)
