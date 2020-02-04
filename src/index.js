import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import restaurantReducer from './reducers/restaurantReducer'
import orderReducer from './reducers/orderReducer'

const reducer = combineReducers({
  restaurants: restaurantReducer,
  listingOrder: orderReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

