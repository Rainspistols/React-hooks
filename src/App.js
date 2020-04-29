import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { GithubState } from './context/github/GithubState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-4'>
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route exact path='/React-hooks/' component={Home} />
              <Route path='/React-hooks/about' component={About} />
              <Route path='/React-hooks/profile/:name' component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
