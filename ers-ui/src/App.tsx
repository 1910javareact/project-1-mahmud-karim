import React from 'react';
import Box from '@material-ui/core/Box';
import './App.css';
import { Container, Typography, Button } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginComponent } from './components/login-component/LoginComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={LoginComponent} />
          <Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Breaking ERS Bad!
          </Typography>
              <Button variant="contained" color="secondary">Enter if you Dare</Button>
            </Box>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
