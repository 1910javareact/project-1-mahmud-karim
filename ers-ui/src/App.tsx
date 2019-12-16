import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import UserInfoComponent from './components/user-component/UserInfoContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/user' component={UserInfoComponent} />
            <Route path='/login' component={LoginComponent} />
            <Route path='/'>
              <LoginComponent />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
