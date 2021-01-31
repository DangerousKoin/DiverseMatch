import React, { useState, useEffect } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import TopicFeed from '../Feeds/TopicFeed';
import * as topicsAPI from '../../utils/topicService';


export default function Search(){
  const [state, setState] = useState({});
  const [topics, setTopics] = useState([]);


  

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(){
    
    try {
      const data = await topicsAPI.search(state.title);
      const formData = new FormData()
      formData.append('title', state.title)
      setTopics([...data.topics])
      
    } catch(err){
      console.log(err, ' this is the error')
    }
  }
  
  return (
   <>
        
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

      <TopicFeed topics={topics} isProfile={false} numPhotosCol={1} />

  </>
  
  );
}