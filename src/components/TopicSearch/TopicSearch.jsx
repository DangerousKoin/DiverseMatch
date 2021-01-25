import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import { Card  } from 'semantic-ui-react'
import TopicCard from '../TopicCard/TopicCard';

      
function handleChange(e){
  setState({
    ...state,
    [e.target.name]: e.target.value
  })
}

function handleSubmit(e){
  e.preventDefault()
           
  const formData = new FormData()
  formData.append('photo', selectedFile)
  formData.append('description', state.description)
  formData.append('title', state.title)
  props.handleAddTopic(formData)
  // Have to submit the form now! We need a function!
}


export default function TopicSearch({topics, keyword, setKeyword}){

  const searchIndex = topics.createIndex( { title: "text", description: "text" } );
  const searchResult = searchIndex.find(
    { $text: { $search: req.body.keyword } }, 
    { score: { $meta: "textScore" } }
    ).sort( { score: { $meta: "textScore" } } );

  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling} // Convert this to direct styling preferably
     key="random1"
     value={keyword}
     placeholder={"Search Topics"}
     onChange={(e) => setKeyword(e.target.value)} // on input of text, this initiates a callback with setKeyword
    />
    <Form.Input
        className="search-input"
        name="title"
        value={state.title} // .keyword??
        placeholder="topic title"
        onChange={handleChange}
        required
    />

    
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {searchResult.map((topic) => {
                return ( 
                        <TopicCard topic={topic} key={topic._id} />
                    )
                })}
        </Card.Group>
  
    )
}