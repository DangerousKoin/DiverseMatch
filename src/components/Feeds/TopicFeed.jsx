import React from 'react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../Cards/TopicCard';


export default function TopicFeed({topics, isProfile, user, numPhotosCol}){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
           
                {topics.map((topic) => {
                return ( 
                        <TopicCard topic={topic} key={topic._id} isProfile={isProfile} user={user} />
                    )
                })}
        </Card.Group>
  
    )
}