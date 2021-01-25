import React, { useState } from 'react';

import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddTopicForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    description: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


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


  return (
    
  
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>

            <Form.Input
                  className="form-control"
                  name="title"
                  value={state.title}
                  placeholder="topic title"
                  onChange={handleChange}
                  required
              />
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="topic description"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD TOPIC
              </Button>
            </Form>
          </Segment>
     
   
  ); 
}