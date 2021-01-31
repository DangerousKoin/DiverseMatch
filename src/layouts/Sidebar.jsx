import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Grid } from 'semantic-ui-react';
import TopicSearch from '../components/Search/TopicSearch';
import '../styles/Sidebar.css';

export default function Sidebar({user}){
    return (
         
            <>
            <Segment>
                <Grid>
                    <Grid.Column>
                        <Grid.Row id="navbox">
                            <Link to="/"><Image id="logoImg" src='https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png' /></Link>
                            {user !== null ?
                            <Link to={`/${user.username}`}>
                                <Image id="avatarImg" src={user.avatar ? user.avatar : "https://react.semantic-ui.com/images/wireframe/square-image.png"}></Image>
                            </Link>
                            :
                            <Link to="/">
                            <Image id="avatarImg" src="https://react.semantic-ui.com/images/wireframe/square-image.png"></Image>
                            </Link>
                            }
                            
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid>
                    <Grid.Column>
                        <Grid.Row>
                            <TopicSearch />
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
            </>
        
        
        
    )
}