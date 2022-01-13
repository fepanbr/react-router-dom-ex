import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

const isLogin = true;

function App() {
  return (
    <Switch>
      <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Redirect to="/profile" /> )} />
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
