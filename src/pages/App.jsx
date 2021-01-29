import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import userService from '../utils/userService'
import Content from '../layouts/Content';
import Sidebar from '../layouts/Sidebar';
import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';
import { Grid, Modal, Button } from 'semantic-ui-react';

function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null});
  };

  return (
    <div className="App">
      <Route path="/">
        {userService.getUser() ?
            null
          :
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        }
        <Grid>
          <Grid.Column style={{ width: 250 }}>
            <Sidebar user={user} />
          </Grid.Column>
          <Grid.Column style={{ width: 350 }}>
            <Content user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid>
      
      <Route exact path="/login">
        <LoginForm handleSignUpOrLogin={handleSignUpOrLogin} />
      </Route>
      <Route exact path="/signup">
        <SignupForm handleSignUpOrLogin={handleSignUpOrLogin} />
      </Route>
      </Route>
    </div>
  );
}

export default App;