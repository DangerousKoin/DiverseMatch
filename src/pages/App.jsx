import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import userService from '../utils/userService'
import Feed from '../layouts/Content';

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
      <Route exact path="/">
        <Feed user={user} handleLogout={handleLogout}/>
      </Route>
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