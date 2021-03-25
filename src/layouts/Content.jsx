import React from 'react';
import { Route } from 'react-router-dom';
import {  Grid, Segment } from 'semantic-ui-react'
import UserDisplay from '../components/Displays/UserDisplay';
import AddTopicForm from '../components/Forms/AddTopicForm';
import MatchFeed from '../components/Feeds/MatchFeed';


export default function Content({user, handleLogout}){  

    return (
      <>
      <Segment id="boxCont">
        <Grid >
          <Grid.Column >
            {user ?
              <Route exact path={`/${user.username}`}>
                <UserDisplay user={user} handleLogout={handleLogout}/>
                <AddTopicForm user={user} />
                
              </Route>
            :
              null
            }
            <Route exact path="/">
              Match Results
              <MatchFeed />
            </Route>
          </Grid.Column>
        </Grid>
      </Segment>
      </>
    )
}