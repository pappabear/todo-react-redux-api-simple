import React from 'react'
import { render } from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import todoApp from './reducers'
import App from './components/App'
import dataService from './services/data-service'

/*
Applying our middleware to the store
*/
let store = createStore(todoApp,{}, applyMiddleware(dataService))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch({type: 'GET_TODO_DATA'})
