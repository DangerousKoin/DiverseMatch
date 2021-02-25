import React from 'react';
import '../../styles/TopicCard.css';
import { Card, Icon, Image, Feed, Button, Grid } from 'semantic-ui-react'


function TopicCard({topic, isProfile, user, deleteTopic, addInterest, removeInterest}) { 

  
  const delTopicHandler = () => deleteTopic(topic._id)
  const addIntHandler = () => addInterest(topic._id)
  const remIntHandler = () => removeInterest(topic._id)
  

  return (
    <>
    <Grid>
      <Grid.Row style={{ textAlign: 'left' }}>
        <Grid.Column style={{ width: '60%', paddingRight: 0 }}>
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
        </Grid.Column>

      {isProfile ?
        <Grid.Column >
          <Button onClick={delTopicHandler}>
            X
          </Button>
        </Grid.Column>
      :
        null
      }
      
      <Grid.Column >
        <Button onClick={addIntHandler}>
          +
        </Button>
      </Grid.Column>

      <Grid.Column >
        <Button onClick={remIntHandler}>
          -
        </Button>
      </Grid.Column>

    </Grid.Row>
  </Grid>
  </>

  );
}

export default TopicCard;