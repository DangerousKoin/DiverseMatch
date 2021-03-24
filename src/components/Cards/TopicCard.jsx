import React from 'react';
import '../../styles/TopicCard.css';
import { Card, Image, Button, Grid } from 'semantic-ui-react'
import * as profileAPI from '../../utils/profileService';


function TopicCard({topic, isProfile, user, deleteTopic}) { 


  
  const delTopicHandler = () => deleteTopic(topic._id)

  async function addInterest() {
    try {
        const data = await profileAPI.addInterest(topic._id);
     
    } catch (err) {
        console.log(err)
    }
  }

  async function deleteInterest() {
    try {
        const data = await profileAPI.removeInterest(topic._Id);
        // getTopics();  need to run this with getInterests()
    } catch (err) {
        console.log(err)
    }
}

  async function addDislike() {
    try {
        const data = await profileAPI.addDislike(topic._id);
   
    } catch (err) {
        console.log(err)
    }
  }

  async function deleteDislike() {
    try {
        const data = await profileAPI.removeDislike(topic._id);
        // getTopics();  need to run this with getInterests()
    } catch (err) {
        console.log(err)
    }
}

  return (
    <>
    <Grid>
      <Grid.Row style={{ textAlign: 'left' }}>
        <Grid.Column style={{ width: '16rem', padding: '0', margin: '0 0 0 1rem' }}>
          <Card id='topicCard' key={topic._id}>
            <Card.Content id='topicContent'>
                <Image
                    id='topicImg'
                    floated='left'
                    size='tiny'
                    src={topic.icon ? topic.icon : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                />
            <strong>{topic.title}</strong>
            <br />
            {topic.description}
            
        
            </Card.Content>
          </Card>
        </Grid.Column >

      {isProfile ?
        <Grid.Column style={{ margin: '1rem' }}>
          <Button onClick={delTopicHandler}>
            X
          </Button>
        </Grid.Column>
      :
      <>
      <Grid.Column style={{ width: 'auto', margin: '0 0.75rem', padding: '0' }}>
        <Grid.Row>
          <Button onClick={addInterest} style={{ width: '1.5rem', height: '1.5rem', margin: '0.25rem', padding: '0' }}>
          +
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Button onClick={addDislike} style={{ width: '1.5rem', height: '1.5rem', margin: '0.25rem', padding: '0' }}>
          -
          </Button>
        </Grid.Row>
    </Grid.Column>
    <Grid.Column>
    <Button onClick={deleteInterest}>
            X-Int
          </Button>
          <Button onClick={deleteDislike}>
            X-Dis
          </Button>
    </Grid.Column>
    </>
      }
      
      

    </Grid.Row>
  </Grid>
  </>

  );
}

export default TopicCard;