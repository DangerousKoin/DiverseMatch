import React, { useState, useEffect } from 'react';
import TopicFeed from '../Feeds/TopicFeed';
import * as topicsAPI from '../../utils/topicService';

import { Button, Form, Segment } from 'semantic-ui-react'

export default function AddTopicForm(handleAddTopic, user){
  const [selectedFile, setSelectedFile] = useState('')
  const [topics, setTopics] = useState([]);
  const [state, setState] = useState({
    title: '',
    description: ''
  })

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
    handleAddTopic(formData)
    // Have to submit the form now! We need a function!
  }

  async function handleAddTopic(topic){

    const data = await topicsAPI.create(topic);

    console.log(data, ' data')
    setTopics([data.topic,  ...topics])
    
    setState({
      title: '',
      description: ''
    })
    getTopics()
    
  };

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  async function deleteTopic(topicId) {
    try {
        const data = await topicsAPI.removeTopic(topicId);
        getTopics();
    } catch (err) {
        console.log(err)
    }
}

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
            <Segment>
            <TopicFeed topics={topics} isProfile={false} numPhotosCol={1} user={user} deleteTopic={deleteTopic} />

            </Segment>
          </Segment>
     
   
  ); 
}