import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import UserInfoComponent from './components/user-component/UserInfoContainer';
import ReimbursementInfoComponent from './components/reimbursement-component/ReimbursementInfoContainer';
import AllUsersComponent from './components/user-component/AllUsersContainer';
import UserByIdComponent from './components/user-component/UserByIdContainer';
import ReimbursementByStatusIdComponent from './components/reimbursement-component/ReimbursementByStatusIdContainer';
import ReimbursementByUserIdComponent from './components/reimbursement-component/ReimbursementByUserIdContainer';
import { UpdateUserComponent } from './components/user-component/UpdateUserComponent';
import { SubmitReimbursementComponent } from './components/reimbursement-component/SubmitReimbursementComponent';
import { UpdateReimbursementComponent } from './components/reimbursement-component/UpdateReimbursementComponent';
import UserPageComponent from './components/user-page-component/UserPageContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/userpage' component={UserPageComponent} />
            <Route path='/users' component={AllUsersComponent} />
            <Route path='/user' component={UserInfoComponent} />
            <Route path='/userbyid' component={UserByIdComponent} />
            <Route path='/updateuser' component={UpdateUserComponent} />
            <Route path='/reimbursement/status' component={ReimbursementByStatusIdComponent} />
            <Route path='/reimbursement/user' component={ReimbursementByUserIdComponent} />
            <Route path='/reimbursement' component={ReimbursementInfoComponent} />
            <Route path='/sumbitreimbursement' component={SubmitReimbursementComponent} />
            <Route path='/updatereimbursement' component={UpdateReimbursementComponent} />
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
