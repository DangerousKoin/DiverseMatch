import React, { useState } from 'react';
import ErrorMessage from '../System/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment, Modal } from 'semantic-ui-react'

export default function LoginForm(props){
    const [invalidForm, setValidForm] = useState(false);
    const [error, setError ] = useState('');
    const [state, setState] = useState({
        username: '',
        password: '',
    });

    const [open, setOpen] = React.useState(true)
    const history = useHistory();
    
    function handleChange(e){
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    };

    async function handleSubmit(e){
      e.preventDefault()
              
      try {
          await userService.login(state);
          // Route to wherever you want!
          props.handleSignUpOrLogin() // 
          history.push('/')
          
        } catch (err) {
          // Invalid user data (probably duplicate email)
          setError(err.message)
        }
    }

    return (
        <>
        <Modal
          basic
          closeIcon
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          trigger={""}
        >



<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png' /> Log-in to your account
            </Header>
            <Form  autoComplete="off"  onSubmit={handleSubmit}>
               <Segment stacked>
                  <Form.Input                    
                    name="username"
                    placeholder="username"
                    value={state.username}
                    onChange={handleChange}
                    requiredss
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={ state.password}
                    onChange={handleChange}
                    required
                  />
                <Button
                  color='teal'
                  fluid size='large'
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
            </Grid.Column>
          </Grid>



        </Modal>
          
        </>
      );
}

