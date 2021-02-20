import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Preview from '../components/pages/Preview';
import Home from '../components/pages/Home';
import Tables from '../components/pages/Tables';
import Checkout from '../components/pages/Checkout';

import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';

import '../static/styles/mobile.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Preview} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/tablas" component={Tables} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
