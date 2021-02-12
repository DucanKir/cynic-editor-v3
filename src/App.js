import logo from './logo.svg';
import './App.css';

// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
