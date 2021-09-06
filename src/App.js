import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Mission from './components/mission';
import Profile from './components/profile';
import Rockets from './components/rockets';
import './sass/App.css';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" component={Rockets} />
        <Route path="/mission" component={Mission} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </main>
  );
}

export default App;
