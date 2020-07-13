import React, {useState} from 'react';
import Login from './Login';
import Reg from './Reg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
return (
    <Router>
    <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>
          </Switch>
       </div>
   </div>
  </Router>
  )  
}
export default App