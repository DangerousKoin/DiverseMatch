import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileDisplay from '../components/Displays/ProfileDisplay';


export default function Content({user, handleLogout}){  


    return (
      
      
       <Grid>
        <Grid.Column style={{ minWidth: 350}}>
          {user ?
          <Route exact path={`/${user.username}`}>
          <ProfileDisplay user={user} handleLogout={handleLogout}/>
          Topic Form
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