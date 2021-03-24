import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid } from 'semantic-ui-react';
import TopicSearch from '../components/Search/TopicSearch';
import ProfileDisplay from '../components/Displays/ProfileDisplay';
import '../styles/Sidebar.css';

export default function Sidebar({user, interests, dislikes}){

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
                                <ProfileDisplay user={user} interests={interests} dislikes={dislikes} />
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