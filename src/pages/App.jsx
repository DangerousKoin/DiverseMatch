import React, {useState, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import '../styles/App.css';
import Content from '../layouts/Content';
import Sidebar from '../layouts/Sidebar';
import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';
import userService from '../utils/userService';
import * as topicsAPI from '../utils/topicService';
import * as profileAPI from '../utils/profileService';

import { Grid } from 'semantic-ui-react';

function App() {

  const [user, setUser] = useState(userService.getUser());
  const [topics, setTopics] = useState([]);
  const [interests, setInterests] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
    getInterests();
    getDislikes();
  };

  function handleLogout(){
    userService.logout();
    setUser({user: null});
    setInterests([]);
    setDislikes([]);
  };

  async function getTopics(){
    
    try {
      const data = await topicsAPI.getAllTopics();
      setTopics([...data.topics]);
    } catch(err){
      console.log(err, ' this is the error');
    }
  }

  async function getInterests(){
  
      try {
        const data = await profileAPI.getAllInterests();
        setInterests([...data.interests]);
      } catch(err){
        console.log(err, ' this is the error');
      }
    }
  
    async function getDislikes(){
      
      try {
        const data = await profileAPI.getAllDislikes();
        setDislikes([...data.dislikes]);
      } catch(err){
        console.log(err, ' this is the error');
      }
    }

    useEffect(() => {
      getInterests();
      getDislikes();
      getTopics();
    }, [])

  return (
    <div className="App">
      <Route path="/">

        {userService.getUser() ?
          <Grid id="container" columns={2}>
            <Grid.Column id="sidebar">
              <Sidebar user={user} topics={topics} interests={interests} dislikes={dislikes} />
            </Grid.Column>
            <Grid.Column id="content">
              <Content user={user} handleLogout={handleLogout} />
            </Grid.Column>
          </Grid>
        :
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        }
        
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