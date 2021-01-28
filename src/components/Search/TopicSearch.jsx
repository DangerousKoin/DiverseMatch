import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../Cards/TopicCard';
import TopicFeed from './TopicResults';
import * as topicService from '../../utils/topicService';
import userService from '../../utils/userService';


export default function Search(){
  const [state, setState] = useState({});
  const [results, setResults] = useState([]);
  const [topics, setTopics] = useState([])

  

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    const data = userService.getProfile(e.username);
    const formData = new FormData()
    formData.append('title', state.title)
    setTopics(() => [...data.topics])
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

      <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {topics.map((topic) => {
                return ( 
                        <TopicCard topic={topic} key={topic._id} isProfile={isProfile} user={user} />
                    )
                })}
        </Card.Group>

    </Segment>
  
  );
}