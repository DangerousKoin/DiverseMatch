import React, { useState, useEffect } from 'react';
import { Grid, Loader } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import TopicFeed from '../../components/TopicFeed/TopicFeed';
import Search from '../../components/Search/Search';
import PageHeader from '../../components/Header/Header';
import { useLocation } from 'react-router-dom';
import AddTopicForm from '../../components/AddTopicForm/AddTopicForm';
import * as topicsAPI from '../../utils/topicService';

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
            console.log("ProfilePage username", username)
            const data = await userService.getProfile(username);
            console.log("ProfilePage data", data)
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

    async function handleAddTopic(topic){

        const data = await topicsAPI.create(topic);

        // to check to make sure this is working
        console.log(data, ' data')
        // after this we'll want to update state
        // after we get back our new topic
        // data is the response from our create function in controllers/topics
        // update the state

        setTopics([data.topic,  ...topics])
        // to conifrm this check the devtools for your feed component
        
    }


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
                    <Grid.Column style={{ minWidth: 250}}>
                        <Grid.Row centered>
                            <PageHeader user={user} handleLogout={handleLogout} />
                        </Grid.Row>
                        
                        <Grid.Row centered>
                            <Search />
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column style={{ maxWidth: 150 }}>
                                <AddTopicForm handleAddTopic={handleAddTopic}/>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={{ maxWidth: 150}}>
                            <TopicFeed isProfile={true} topics={topics} numPhotosCol={1} user={user} />
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column style={{ minWidth: 450}}>
                        <Grid.Row>
                          
                                <ProfileBio user={profileUser} />
                      
                        </Grid.Row>
                        
                        
                    </Grid.Column>
                </Grid>
            }
        </>
    )
}
