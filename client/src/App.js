import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AddMovements from './components/AddMovements'
import Saldo from './components/Saldo'
import NavBar from './components/NavBar'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path='/saldo' component={Saldo} exact />
          <Route path='/addMovements' component={AddMovements} exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
