import React from 'react';
import PageHeader from '../components/Sidebar';
import {  Grid, Modal } from 'semantic-ui-react'
import ProfileBio from '../components/ProfileBio';
import Search from '../components/Search';


export default function Feed({user, handleLogout}){  


    return (
<>
      { user ?
      
       <Grid>
          <Grid.Column style={{ minWidth: 250}}>
              <Grid.Row centered>
                  <PageHeader user={user}  />
              </Grid.Row>

              <Grid.Row centered>
                        <h2>Find Matches!</h2>
                            <Search />
                        
          
                        </Grid.Row>

        </Grid.Column>
        <Grid.Column style={{ minWidth: 350}}>
          <ProfileBio user={""} />
          Need to make user cards!
        </Grid.Column>
      </Grid>
     
     :
    // Could we make this a component?

     <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your subscription has been confirmed
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
        

      }
        </>



    )
}