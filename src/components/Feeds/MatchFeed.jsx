import React from 'react';
import { Card  } from 'semantic-ui-react'
import MatchCard from '../Cards/MatchCard';


export default function MatchFeed({matches}){

    return (
        <Card.Group itemsPerRow={1} stackable>
            {matches ?
            matches.map((match) => {
            return ( 
                    <MatchCard match={match} key={match._id} />
                )
            })
        :
        null
        }
        </Card.Group>
    )
}