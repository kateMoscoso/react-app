import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../containers/Login'
import Home from '../containers/Home'
const App = () => (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
    </BrowserRouter>
)
export default App