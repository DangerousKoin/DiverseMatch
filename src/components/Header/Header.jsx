import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';


export default function PageHeader({user}){
    return (
        <Segment clearing >
            <Header >
                <Link to="/"><Image style={{ display: 'inline', float: 'left', width: 100 }} src='https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png' /></Link>
            
                <Link to={`/${user.username}`}><Image style={{ display: 'inline', float: 'right', width: 80, height: 80 }} src={user.avatar ? user.avatar : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image></Link>          
            </Header>
        </Segment>
    )
}