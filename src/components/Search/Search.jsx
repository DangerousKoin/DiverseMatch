import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../TopicCard/TopicCard';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import * as topicService from '../../utils/topicService';

export default function Search(){
  const [state, setState] = useState({});
  const [results, setResults] = useState([]);

  

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', state.title)
    const searchResults = topicService.search(state.title);
    console.log("component results ", searchResults);
    
  }
  
  return (
    <Segment>
        
      <Form  autoComplete="off" onSubmit={handleSubmit}>
        <Form.Input
            className="search-input"
            name="title"
            placeholder="Search Topics"
            onChange={handleChange}
            required
        />
        <Button
          type="submit"
          className="btn"
        >
          Search
        </Button>
      </Form>
    


   Results Below:
      <Card.Group stackable>
          {console.log(results)}
      <TopicFeed topics={results} numPhotosCol={1} />

              
      </Card.Group>

    </Segment>
  
  );
}