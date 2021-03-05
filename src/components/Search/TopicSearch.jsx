import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';
import {Redirect, Link} from 'react-router-dom';
import TopicFeed from '../Feeds/TopicFeed';
import * as topicsAPI from '../../utils/topicService';
import * as profilesAPI from '../../utils/profileService';



export default function Search(){
  const [state, setState] = useState({});
  const [topics, setTopics] = useState([]);
  const [interests, setInterests] = useState([]);
  const [dislikes, setDislikes] = useState([]);


  

  function handleChange(e){
    
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      if (state.title === '') {getTopics()} else {
        const data = await topicsAPI.search(state.title);
        const formData = new FormData();
        formData.append('title', state.title);
        setTopics([...data.topics]);
      }
      
    } catch(err){
      console.log(err, ' this is the error');
    }
  }



  
  async function getTopics(){
    
    try {
      const data = await topicsAPI.getAll();
      setTopics([...data.topics]);
    } catch(err){
      console.log(err, ' this is the error');
    }
  }

  async function getInterests(){
    
    try {
      const data = await profilesAPI.getAllInterests();
      setInterests([...data.interests]);
    } catch(err){
      console.log(err, ' this is the error');
    }
  }

  async function getDislikes(){
    
    try {
      const data = await profilesAPI.getAllDislikes();
      setDislikes([...data.dislikes]);
    } catch(err){
      console.log(err, ' this is the error');
    }
  }
  
  return (
  <>
      <Form  autoComplete="off" onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>

        <Grid>
          <Grid.Row style={{ textAlign: 'left' }}>
            <Grid.Column style={{ width: '60%', paddingRight: 0 }}>
              <Form.Input
                  className="search-input"
                  name="title"
                  placeholder="Search Topics"
                  onChange={handleChange}
                  
                  
              />
            </Grid.Column>
            <Grid.Column >
              <Button type="submit" className="btn">
              Search
              </Button>

          </Grid.Column>
          </Grid.Row>
        </Grid>
        </Form>

      <Grid>
        <Grid.Column >
        <TopicFeed topics={topics} isProfile={false} numPhotosCol={1}  />
        </Grid.Column>
      </Grid>

  </>
  
  );
}