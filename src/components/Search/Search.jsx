import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import { Card  } from 'semantic-ui-react'
import TopicCard from '../TopicCard/TopicCard';
import searchService from '../../utils/searchService'

export default function Search(searchResults){
  const [state, setState] = useState({})
      
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    // need to fix our outgoing form data
    const formData = new FormData()
    formData.append('title', state.title)
    const searchResult = searchService.search(state.title)
    console.log(searchResult);

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
    


    {/* want to put results here
      <Card.Group stackable>
          
              {searchResults.map((topic) => {
              return ( 
                      <TopicCard topic={topic} key={topic._id} />
                  )
              })}
      </Card.Group> */}

    </Segment>
  
  );
}