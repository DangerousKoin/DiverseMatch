import React from 'react';
import { Card, Icon, Image, Feed, Button } from 'semantic-ui-react'


function TopicCard({topic, deleteTopic}) { 

  
  const clickHandler = () => deleteTopic(topic._id)

  return (
    <Card style={{ minWidth: 150}} key={topic._id}>
          <Card.Content style={{ fontSize: 'small', display: 'inline', whiteSpace: 'nowrap', textAlign: 'center', padding: 0}}>
              <Image
                  style={{ padding: 2, border: 2, borderRadius: 5, backgroundColor: 'green' }}
                  floated='left'
                  size='tiny'
                  src={topic.icon ? topic.icon : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              />
          <strong>{topic.title}</strong>
          <br />
          {topic.description}
          <Button
            onClick={clickHandler}
          >X</Button>
      
      </Card.Content>
    </Card>
  );
}

export default TopicCard;