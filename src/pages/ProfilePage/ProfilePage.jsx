import React, { useState, useEffect } from 'react';
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import TopicSearch from '../../components/TopicFeed/TopicSearch';
import PageHeader from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';

export default function ProfilePage({ user, handleLogout }) {

    const [topics, setTopics] = useState([])
    const [profileUser, setProfileUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const location = useLocation()
    console.log(location)

    async function getProfile() {

        try {

            const username = location.pathname.substring(1)
            // location.pathname returns /jimbo so we need to cut off the / using the js method substring
            // This gets the username from the url! 
            console.log(username)
            const data = await userService.getProfile(username);
            console.log(data)
            setLoading(() => false)
            setTopics(() => [...data.topics])
            setProfileUser(() => data.user)
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }





    useEffect(() => {
        getProfile()
    }, [])



    return (

        <>
            { loading ?
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                        <Grid.Column style={{ maxWidth: 450}}>
                                <Loader size='large' active>Loading</Loader>
                        </Grid.Column>
                </Grid>
                :
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ProfileBio user={profileUser} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <TopicSearch isProfile={true} topics={topics} user={user} />
                    </Grid.Row>
                    <Grid.Row centered>
                        <TopicFeed isProfile={true} topics={topics} numPhotosCol={3} user={user} />
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}
