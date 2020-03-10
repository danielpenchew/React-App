import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavBar } from '../components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductsList, ProductsInsert, ProductsUpdate, Home } from '../pages';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/list" exact component={ProductsList} />
        <Route path="/products/create" exact component={ProductsInsert} />
        <Route path="/products/update/:id" exact component={ProductsUpdate} />
      </Switch>
    </Router>
  )
}

export default App;

