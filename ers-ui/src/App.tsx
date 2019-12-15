import React from 'react';
import Box from '@material-ui/core/Box';
import './App.css';
import { Container, Typography, Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Container maxWidth="sm">
              <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Breaking ERS Bad!
                </Typography>
                <Link to="/login">
                  <Button variant="contained" color="secondary">Enter if you Dare</Button>
                </Link>
              </Box>
            </Container>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
