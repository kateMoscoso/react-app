import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
import reducer from './reducers'
import App from './routes/App';
import { initalState } from '../initalState.json'

console.log(initalState)
const initialState = { ...initalState, user: {}, playing: {} }

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);