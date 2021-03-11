import {React, useState} from 'react';
import {Redirect, Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Grid } from 'semantic-ui-react';
import TopicSearch from '../components/Search/TopicSearch';
import CriteriaDisplay from '../components/Displays/CriteriaDisplay';
import * as profilesAPI from '../utils/profileService';
import '../styles/Sidebar.css';

export default function Sidebar({user}){

    const [interests, setInterests] = useState([profilesAPI.getAllInterests()]);
    const [dislikes, setDislikes] = useState([profilesAPI.getAllDislikes()]);



 
    
    
  

    async function getInterests(){
    
        try {
          const data = await profilesAPI.getAllInterests();
          setInterests([...data.interests]);
        } catch(err){
          console.log(err, ' this is the error');
        }
      }
    
      async function getDislikes(){
        
        try {
          const data = await profilesAPI.getAllDislikes();
          setDislikes([...data.dislikes]);
        } catch(err){
          console.log(err, ' this is the error');
        }
      }

      

    return (
         
            <>
            <Segment id="boxCont">
                <Grid>
                    <Grid.Column>
                        <Link to="/"><Image id="logoImg" src='https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png' /></Link>
                        {user !== null ?
                        <Link to={`/${user.username}`}>
                            
                            <Image id="avatarImg" src={user.avatar ? user.avatar : "https://react.semantic-ui.com/images/wireframe/square-image.png"}></Image>
                            <div id="matchNumCont" ><div id="matchNum">19</div></div>
                           
                        </Link>
                        :
                        <Link to="/">
                        <Image id="avatarImg" src="https://react.semantic-ui.com/images/wireframe/square-image.png"></Image>
                        </Link>
                        }
                    </Grid.Column>
                </Grid>
                <Segment id="elementCont">
                    <Grid>
                        <Grid.Column>
                            <Grid.Row>
                                <CriteriaDisplay user={user} interests={interests} dislikes={dislikes} />
                            </Grid.Row>
                            <Grid.Row id="searchBox">
                                <TopicSearch />
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Segment>
            
            </>
        
        
        
    )
}