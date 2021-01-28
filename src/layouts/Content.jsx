import React from 'react';
import PageHeader from './Sidebar';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileBio from '../components/Displays/ProfileDisplay';
import Search from '../components/Search/TopicSearch';


export default function Feed({user, handleLogout}){  


    return (
<>
      { user ?
      
       <Grid>
        <Grid.Column style={{ minWidth: 350}}>
          <ProfileBio user={""} />
          Need to make user cards!
        </Grid.Column>
      </Grid>
     
     :

     <SignupForm />
        

      }
        </>



    )
}