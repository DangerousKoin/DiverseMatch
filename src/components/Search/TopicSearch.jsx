import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../Cards/TopicCard';
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
    const data = topicService.search(state.title);
    const formData = new FormData()
    formData.append('title', state.title)
    setResults(() => [...data.results])
    
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

      <Card.Group itemsPerRow={1} stackable>
        {results.map((topic) => {
          return ( 
                  <TopicCard topic={topic} key={topic._id} />
              )
        })}
      </Card.Group>

    </Segment>
  
  );
}