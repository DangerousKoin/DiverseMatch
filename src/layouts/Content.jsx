import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileDisplay from '../components/Displays/ProfileDisplay';


export default function Content({user, handleLogout}){  


    return (
      
      
       <Grid>
        <Grid.Column style={{ minWidth: 350}}>
          <Route exact path="/:username">
            <ProfileDisplay user={user} />
            Topic Form
          </Route>
          <Route exact path="/">
            Match Results
          </Route>
        </Grid.Column>
        
      </Grid>
      
    )
}