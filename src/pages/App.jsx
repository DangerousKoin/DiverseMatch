import React, {useState} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import userService from '../utils/userService'
import Content from '../layouts/Content';
import Sidebar from '../layouts/Sidebar';
import LoginForm from '../components/Forms/LoginForm';
import { Grid } from 'semantic-ui-react';

function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }


  
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {userService.getUser() ?
            <>
              <Grid>
                
                <Grid.Column style={{ width: 250 }}>
                  <Sidebar user={user} />
                </Grid.Column>

                <Grid.Column style={{ width: 350 }}>
                  <Content user={user} handleLogout={handleLogout} />
                </Grid.Column>
              
              </Grid>
            </>
          :
            <>
              <p>hello</p>
              <LoginForm handleSignUpOrLogin={handleSignUpOrLogin}/>
            </>
          }
        </Route>
      </Switch>
    </div>
  );
}

export default App;

{/* <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <>
                <Route exact path="/">
                    <Feed user={user} handleLogout={handleLogout}/>
                </Route>
                <Route path="/:username">
                  <ProfilePage user={user} handleLogout={handleLogout}/>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch> */}