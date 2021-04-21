import React from 'react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../Cards/TopicCard';


export default function TopicFeed({topics, user, location, deleteTopic, addInterest, addDislike}){

    return (
        <Card.Group itemsPerRow={1} stackable>
            {topics.map((topic) => {
            return ( 
                    <TopicCard topic={topic} key={topic._id} location={location} user={user} deleteTopic={deleteTopic} addInterest={addInterest} addDislike={addDislike} />
                )
            })}
        </Card.Group>
    )
}
