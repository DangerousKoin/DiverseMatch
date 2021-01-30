import React from 'react';
import {  Image, Grid, Segment, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';



export default function ProfileDisplay({user, handleLogout}) { 
  return (
  <Grid textAlign='center' columns={2}>
    <Grid.Row>
      <Grid.Column>
        <Image src={`${user.avatar ? user.avatar : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='small' />
      </Grid.Column>
      <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
        <Segment vertical>
           <h3>{user.username}</h3>
           <Link to="/"><Button onClick={handleLogout}>Logout</Button></Link>
        </Segment>
          
      </Grid.Column>
    </Grid.Row>
  </Grid>

  );
}