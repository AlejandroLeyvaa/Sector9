import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home';

import AppContext from '../context/AppContext';
import useInitialState from '../Hooks/useInitialState';

import '../static/styles/mobile.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;