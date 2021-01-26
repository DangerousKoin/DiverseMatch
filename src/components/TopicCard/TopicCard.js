import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'

function TopicCard({topic}) { 

  return (
    <Card key={topic._id}>
          <Card.Content textAlign='left'>
          <Card.Header floated="right">Topic: {topic.title}</Card.Header>
              <Image
                  floated='left'
                  size='large'
                  src={topic.icon ? topic.icon : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              />
          </Card.Content>
      <Card.Content>
        <Card.Description>
          {topic.description}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TopicCard;