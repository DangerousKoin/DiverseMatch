import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/Header/Header';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import AddTopicForm from '../../components/AddTopicForm/AddTopicForm';
import * as topicsAPI from '../../utils/topicService';
import {  Grid } from 'semantic-ui-react'

export default function Feed({user, handleLogout}){  

    const [topics, setTopics] = useState([])

    async function handleAddTopic(topic){

        const data = await topicsAPI.create(topic);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new topic
        // data is the response from our create function in controllers/topics
        // update the state

        setTopics([data.topic,  ...topics])
        // to conifrm this check the devtools for your feed component
        
    }

    // Maybe we need to call a funciton that gets all the topics
    async function getTopics(){
    
        try {
          const data = await topicsAPI.getAll();
          setTopics([...data.topics])
        } catch(err){
          console.log(err, ' this is the error')
        }
      }

      useEffect(() => {
        getTopics()
      }, [])

      



    return (
        
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddTopicForm handleAddTopic={handleAddTopic}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          <TopicFeed topics={topics} isProfile={true} numPhotosCol={1} user={user} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}