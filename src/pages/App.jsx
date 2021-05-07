import React, {useState, useEffect} from 'react';
import { Redirect, Route } from 'react-router-dom';
import '../styles/App.css';
import Content from '../layouts/Content';
import Sidebar from '../layouts/Sidebar';
import WelcomeForm from '../components/Forms/WelcomeForm';
import userService from '../utils/userService';
import * as topicsAPI from '../utils/topicService';
import * as profileAPI from '../utils/profileService';

import { Grid } from 'semantic-ui-react';

function App() {

  const [user, setUser] = useState(userService.getUser());
  const [topics, setTopics] = useState([]);
  const [interests, setInterests] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [matches, setMatches] = useState([]);
  let matchNum = matches.length;

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
    getInterests();
    getDislikes();
    getMatches();
  };

  function handleLogout(){
    userService.logout();
    setUser({user: null});
    setInterests([]);
    setDislikes([]);
    setMatches([]);
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

    async function getMatches(){
      try {
        console.log("yo")
        const data = await profileAPI.getMatches();
        setMatches([...data.matches]);
      } catch(err){
        console.log(err, ' this is the error');
      }
    }

    async function addInterest(topicId) {
      try {
          await profileAPI.addInterest(topicId);
          getInterests();
          getMatches();
      } catch (err) {
          console.log(err)
      }
    }
  
    async function deleteInterest(topicId) {
      try {
          await profileAPI.removeInterest(topicId);
          getInterests();
          getMatches();
      } catch (err) {
          console.log(err)
      }
  }
  
    async function addDislike(topicId) {
      try {
          await profileAPI.addDislike(topicId);
          getDislikes();
          getMatches();
      } catch (err) {
          console.log(err)
      }
    }
  
    async function deleteDislike(topicId) {
      try {
          await profileAPI.removeDislike(topicId);
          getDislikes();
          getMatches();
      } catch (err) {
          console.log(err)
      }
  }

    useEffect(() => {
      getInterests();
      getDislikes();
      getTopics();
      getMatches();
    }, [])

  return (
    <div className="App">
      <Route path="/">

        {userService.getUser() ?
          <Grid id="container" columns={2}>
            <Grid.Column id="sidebar">
              <Sidebar user={user} topics={topics} interests={interests} dislikes={dislikes} addInterest={addInterest} addDislike={addDislike} deleteInterest={deleteInterest} deleteDislike={deleteDislike} matchNum={matchNum} />
            </Grid.Column>
            <Grid.Column id="content">
              <Content user={user} handleLogout={handleLogout} matches={matches} />
            </Grid.Column>
          </Grid>
        :
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
        }
        <Route exact path="/welcome">
          <WelcomeForm handleSignUpOrLogin={handleSignUpOrLogin} />
        </Route>

      </Route>
    </div>
  );
}

export default App;