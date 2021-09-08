import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/header';
import Missions from './components/missions';
import Profile from './components/profile';
import Rockets from './components/rockets';
import './sass/App.css';
import { getMissions, getMissionsFromApi } from './redux/mission/mission';
import { getRockets, getRocketsFromApi } from './redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const { rocketsReducer: a, missionReducer: b } = useSelector((state) => state);
  useEffect(() => {
    getMissionsFromApi(dispatch, getMissions);
    getRocketsFromApi(dispatch, getRockets);
  }, []);
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Rockets store={a} />} />
          <Route path="/mission" exact render={() => <Missions store={b} />} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
