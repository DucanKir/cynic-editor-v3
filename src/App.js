import './App.css';
import { FirebaseDatabaseProvider } from "@react-firebase/database";

// import Register from './components/auth/Register'
// import Login from './components/auth/Login'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import ComicsPage from './components/comics-page/comics-page';

function App() {
  return (
    <div>
      <FirebaseDatabaseProvider>
        <HashRouter>
          <Navbar />
          <Switch>
            <Route path="/download" component={ComicsPage} />
            <Route path="/" component={Home} />
          </Switch>
        </HashRouter>
      </FirebaseDatabaseProvider>
    </div>
  );
}

export default App;
