import React from 'react';
import {  Image, Grid, Segment, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import TopicCard from '../Cards/TopicCard';



export default function CriteriaDisplay({user, interests, dislikes}) { 
  return (
  <Grid>
    <h2>Interests</h2>
    {interests.map((topic) => {
                    
                return ( 
                        <TopicCard topic={topic} key={topic._id} user={user} />
                    )
                })}
    <h2>Dislikes</h2>
    {dislikes.map((topic) => {
                return ( 
                        <TopicCard topic={topic} key={topic._id} user={user} />
                    )
                })}
  </Grid>

  );
}
