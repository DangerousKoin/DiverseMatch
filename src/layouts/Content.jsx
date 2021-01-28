import React from 'react';
import SignupForm from '../components/Forms/SignupForm';
import LoginForm from '../components/Forms/LoginForm';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileDisplay from '../components/Displays/ProfileDisplay';


export default function Content({user, handleLogout}){  


    return (
<>
      { user ?
      
       <Grid>
        <Grid.Column style={{ minWidth: 350}}>
          <ProfileDisplay user={user} />
          Need to make user cards!
        </Grid.Column>
      </Grid>
     
     :
        <Grid>
          <Grid.Column style={{ minWidth: 350}}>
            <LoginForm />
          </Grid.Column>
        </Grid>
     
        

      }
        </>



    )
}