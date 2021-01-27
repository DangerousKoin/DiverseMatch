import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import AddTopicForm from '../../components/AddTopicForm/AddTopicForm';
import * as topicsAPI from '../../utils/topicService';
import {  Grid, Loader } from 'semantic-ui-react'

export default function Feed({user, handleLogout}){  


    return (

       <Grid>
          <Grid.Column style={{ minWidth: 250}}>
              <Grid.Row centered>
                  <PageHeader user={user} handleLogout={handleLogout} />
              </Grid.Row>


        </Grid.Column>
        <Grid.Column style={{ minWidth: 350}}>
          Match Results
        </Grid.Column>
      </Grid>
     
        



    )
}