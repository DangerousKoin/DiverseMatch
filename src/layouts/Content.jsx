import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {  Grid, Modal, Segment } from 'semantic-ui-react'
import UserDisplay from '../components/Displays/UserDisplay';
import AddTopicForm from '../components/Forms/AddTopicForm';

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
            </Route>
          </Grid.Column>
        </Grid>
      </Segment>
      </>
    )
}