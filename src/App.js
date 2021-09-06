import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/header';
import Mission from './components/mission';
import Profile from './components/profile';
import Rockets from './components/rockets';
import './sass/App.css';
import { getRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();
  const { rocketsReducer: store } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getRockets([{ id: 1 }, { id: 2 }]));
  }, []);
  console.log(store);

  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Rockets} />
          <Route path="/mission" component={Mission} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
