import React from 'react';
import { Card  } from 'semantic-ui-react'
import TopicCard from '../TopicCard/TopicCard';

export default function TopicSearch({keyword, setKeyword}){

  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling} // Convert this to direct styling preferably
     key="random1"
     value={keyword}
     placeholder={"Search Topics"}
     onChange={(e) => setKeyword(e.target.value)} // on input of text, this initiates a callback with setKeyword
    />
  );
}


export default function TopicFeed({topics, isProfile, numPhotosCol, user}){

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