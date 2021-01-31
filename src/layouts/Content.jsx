import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileDisplay from '../components/Displays/ProfileDisplay';
import AddTopicForm from '../components/Forms/AddTopicForm';

export default function Content({user, handleLogout}){  

    return (
       <Grid>
        <Grid.Column>
          {user ?
            <Route exact path={`/${user.username}`}>
              <ProfileDisplay user={user} handleLogout={handleLogout}/>
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
      
    )
}