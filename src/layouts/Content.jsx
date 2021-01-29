import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileDisplay from '../components/Displays/ProfileDisplay';
import AddTopicForm from '../components/Forms/AddTopicForm';
import * as topicsAPI from '../utils/topicService';

export default function Content({user, handleLogout}){  

  const [topics, setTopics] = useState([]);

  async function handleAddTopic(topic){

    const data = await topicsAPI.create(topic);

    console.log(data, ' data')
    setTopics([data.topic,  ...topics])    
  };





    return (
       <Grid>
        <Grid.Column style={{ minWidth: 350}}>
          {user ?
            <Route exact path={`/${user.username}`}>
              <ProfileDisplay user={user} handleLogout={handleLogout}/>
              <AddTopicForm handleAddTopic={handleAddTopic}/>
            </Route>
          :
            null
          }
          <Route exact path="/">
            Match Results
          </Route>
        </Grid.Column>
      </Grid>
      
    )
}