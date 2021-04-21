import React from 'react';
import '../../styles/MatchCard.css';
import { Card, Image, Button, Grid } from 'semantic-ui-react'


function MatchCard({match}) {
  return (
    <>
    <Grid>
      <Grid.Row style={{ textAlign: 'left' }}>
        <Grid.Column style={{ width: '16rem', padding: '0', margin: '0 0 0 1rem' }}>
          <Card id='matchCard' key={match._id}>
            <Card.Content id='topicContent'>
                <Image
                    id='matchImg'
                    floated='left'
                    size='tiny'
                    src={match.avatar ? match.avatar : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                />
            <strong>{match.username}</strong>
            <br />
            Match Score: {match.matchScore}
            </Card.Content>
          </Card>
        </Grid.Column >
    </Grid.Row>
  </Grid>
  </>

  );
}

export default MatchCard;