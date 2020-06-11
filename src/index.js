import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux' 
import reducer from './reducers'
import App from './routes/App';
import { initalState } from '../initalState.json'

const initialState = { ...initalState, user: {}, playing: {} }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  
  
const store = createStore(reducer, initialState, composeEnhancers ()) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);