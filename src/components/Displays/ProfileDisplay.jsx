import React from 'react';
import {  Image, Grid, Segment, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../styles/ProfDisp.css';


export default function ProfileDisplay({user, handleLogout}) { 
  return (
  <Grid columns={2}>
    
      <Grid.Column>
        <Image id="profImg" src={`${user.avatar ? user.avatar : "https://react.semantic-ui.com/images/wireframe/round-image.png"} `} />
      </Grid.Column>
      <Grid.Column>
           <h3>{user.username}</h3>
           <Link to="/"><Button onClick={handleLogout}>Logout</Button></Link>
      </Grid.Column>
   
  </Grid>

  );
}