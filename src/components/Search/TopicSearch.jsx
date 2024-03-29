import React, { useState } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import TopicFeed from '../Feeds/TopicFeed';
import * as topicsAPI from '../../utils/topicService';




export default function Search({addInterest, addDislike}){
  const [state, setState] = useState({});
  const [topics, setTopics] = useState([]);

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
      if (state.title) {
        const data = await topicsAPI.search(state.title);
        const formData = new FormData();
        formData.append('title', state.title);
        setTopics([...data.topics]);
      } else {
        getTopics()
      }
      
    } catch(err){
      console.log(err, ' this is the error');
    }
  }

  async function getTopics(){
    try {
      const data = await topicsAPI.getAllTopics();
      setTopics([...data.topics]);
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
        <TopicFeed topics={topics} location={"search"} addInterest={addInterest} addDislike={addDislike} />
        </Grid.Column>
      </Grid>

  </>
  
  );
}