// for search, we are combining a few components together
// we first pass our keyword to the controller
// then the controller sends the resulting array of matches back
// mongodb also has a built in way to filter dislikes for a stretch goal

// with the resulting matches, we then display the topic cards and use onClick to
// submit the form to user interests array



import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import { Card  } from 'semantic-ui-react'
import TopicCard from '../TopicCard/TopicCard';

export default function AddInterestForm(props){
  const [state, setState] = useState({})

  const searchResult = props.searchIndex.find(
    { $text: { $search: state.keyword } }, 
    { score: { $meta: "textScore" } }
    ).sort( { score: { $meta: "textScore" } } );
      
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
  formData.append('topic', state.topic)
  props.handleAddTopic(formData)
  // Have to submit the form now! We need a function!
}

  return (
    <Segment>
        
      <Form  autoComplete="off" onSubmit={handleSubmit}>
        <Form.Input
            className="search-input"
            name="title"
            value={state.keyword} // .keyword from props!
            placeholder="topic title"
            onChange={handleChange}
            required
        />
        <Button
          type="submit"
          className="btn"
        >
          ADD TOPIC
        </Button>
      </Form>
    
      <Card.Group stackable>
          
              {searchResult.map((topic) => {
              return ( 
                      <TopicCard topic={topic} key={topic._id} />
                  )
              })}
      </Card.Group>

    </Segment>
  
  );
}