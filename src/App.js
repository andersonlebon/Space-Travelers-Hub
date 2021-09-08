import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/header';
import Missions from './components/missions';
import Profile from './components/profile';
import Rockets from './components/rockets';
import './sass/App.css';
import { getRockets, getRocketsFromApi } from './redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const { rocketsReducer, missionReducer } = useSelector((state) => state);
  useEffect(() => {
    getRocketsFromApi(dispatch, getRockets);
  }, []);
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Rockets store={rocketsReducer} />}
          />
          <Route
            path="/mission"
            exact
            render={() => <Missions store={missionReducer} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile rockets={rocketsReducer} missions={missionReducer} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
