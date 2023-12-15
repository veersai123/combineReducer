/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers/rootReducer.jsx'
import { redu } from './redu.jsx'
import New from './New.jsx'


// const store=createStore(rootReducer)
const store=createStore(redu)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <New />
  </Provider>,
)
