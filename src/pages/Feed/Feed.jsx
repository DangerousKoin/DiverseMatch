import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import AddTopicForm from '../../components/AddTopicForm/AddTopicForm';
import * as topicsAPI from '../../utils/topicService';
import {  Grid, Loader } from 'semantic-ui-react'
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import Search from '../../components/Search/Search';


export default function Feed({user, handleLogout}){  


    return (

       <Grid>
          <Grid.Column style={{ minWidth: 250}}>
              <Grid.Row centered>
                  <PageHeader user={user}  />
              </Grid.Row>

              <Grid.Row centered>
                        <h2>Find Matches!</h2>
                            <Search />
                        
          
                        </Grid.Row>

        </Grid.Column>
        <Grid.Column style={{ minWidth: 350}}>
          <ProfileBio user={""} />
          Need to make user cards!
        </Grid.Column>
      </Grid>
     
        



    )
}