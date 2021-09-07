import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Header from './components/header';
import Mission from './components/mission';
import Profile from './components/profile';
import Rockets from './components/rockets';
import './sass/App.css';
import { getRockets, getRocketsFromApi } from './redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();
  const { rocketsReducer: store } = useSelector((state) => state);

  useEffect(() => {
    getRocketsFromApi(dispatch, getRockets);
  }, []);
  console.log(store);

  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Rockets store={store} />} />
          <Route path="/mission" component={Mission} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
