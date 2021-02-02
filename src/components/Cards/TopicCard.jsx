import React from 'react';
import '../../styles/TopicCard.css';
import { Card, Icon, Image, Feed, Button, Grid } from 'semantic-ui-react'


function TopicCard({topic, deleteTopic}) { 

  
  const clickHandler = () => deleteTopic(topic._id)

  return (
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
            <Grid.Column >
    <Button
            onClick={clickHandler}
          >X</Button>
          </Grid.Column>
          </Grid.Row>
        </Grid>
  );
}

export default TopicCard;