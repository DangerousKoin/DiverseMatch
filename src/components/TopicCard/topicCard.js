import React from 'react';
import { Card, Icon, Image, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function TopicCard({topic}) { 

  return (
    <Card key={topic._id}>
          <Card.Content textAlign='left'>
              <Image
                  floated='left'
                  size='large'
                  avatar
                  src={topic.icon ? topic.icon : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              />
              <Card.Header floated="right">{topic.title}</Card.Header>
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