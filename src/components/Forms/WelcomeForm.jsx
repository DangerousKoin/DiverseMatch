import React, { useState } from 'react';
import ErrorMessage from '../System/ErrorMessage';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function SignupForm(props){
  const [invalidForm] = useState(false);
  const [logError, setLoginError ] = useState('');
  const [signError, setSignupError ] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [logState, setLogState]  = useState({
    username: '',
    password: ''
  });
  const [signState, setSignState]  = useState({
    username: '',
    password: '',
    passwordConf: ''
  });
  
  

  const history = useHistory()
  
  function handleLogChange(e){
    setLogState({
      ...logState,
      [e.target.name]: e.target.value,
    })
  }

  function handleSignChange(e){
    setSignState({
      ...signState,
      [e.target.name]: e.target.value,
      email: signState.username + '@diversematch.com'
    })
  }

  async function handleLogin(e){
    e.preventDefault()
            
    try {
        await userService.login(logState);
        // Route to wherever you want!
        props.handleSignUpOrLogin() // 
        history.push('/')
        
      } catch (err) {
        // Invalid user data (probably duplicate email)
        setLoginError(err.message)
      }
  }

  async function handleSignup(e){
    // add this later
    e.preventDefault();

    // Photos have to be sent over as FormData
    // They send over the form in multiparts (multipe requests to the server)

    const formData = new FormData();
    formData.append('photo', selectedFile);


    // generating rest of form data by looping over the state object!
    for (let key in signState){
      formData.append(key, signState[key])
    }
    //fyi if you log out formData you won't see anything you have to use the folllowing

    // Display the key/value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }

    // SO now we have are data prepared to send over in our formData object
    try {
      // refere to the utils/userService, to look at the signup fetch function
      await userService.signup(formData);
      // setTheUser in our app
      props.handleSignUpOrLogin() // gets the token from localstorage and updates the user state in our app.js
      // with the correct user object from the current token
      // then route to the homepage
      history.push('/') // defined above from react-router-dom
      // after this we can go whereever

    } catch(err){
      console.log(err.message)
      setSignupError(err.message)
    }

  }

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }
    
  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }} >            
          
          <Grid.Row >
            <Grid.Column style={{ maxWidth: "35%", float: "left" }} verticalAlign='top'>
              <Segment id="boxCont" >
                <Image src='https://photocollector.s3-us-west-2.amazonaws.com/site-images/DiverseMatch_logo.png' />
              </Segment>
              <Segment id="elementCont">
              <Header as='h2' color='teal' textAlign='center'>
            Welcome!
          </Header>
              <Form  autoComplete="off" onSubmit={handleLogin}>
                  <Form.Input
                    name="username"
                    placeholder="username"
                    value={logState.username}
                    onChange={handleLogChange}
                    required
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    placeholder="password"
                    value={logState.password}
                    onChange={handleLogChange}
                    required
                  />
                <Button
                  color='teal'
                  fluid size='large'
                  type="submit"
                  className="btn"
                  disabled={invalidForm}
                >
                  {logError ? <ErrorMessage error={logError} /> : "Login"}
                </Button>
                
            </Form>
                  </Segment>

            </Grid.Column>
            <Grid.Column style={{ maxWidth: "63%", textAlign: "right", float: "right" }} >
              <Segment id="elementCont">
              <Header as='h2' color='teal' textAlign='center'>
            New User?
          </Header>
                <Form autoComplete="off"  onSubmit={handleSignup}>
                  <Form.Input                    
                    name="username"
                    placeholder="username"
                    value={signState.username}
                    onChange={handleSignChange}
                    required
                  />
                  <Form.Input             
                    name="password"
                    type="password"
                    placeholder="password"
                    value={signState.password}
                    onChange={handleSignChange}
                    required
                  />
                  <Form.Input     
                    name="passwordConf"
                    type="password"
                    placeholder="Confirm Password"
                    value={signState.passwordConf}
                    onChange={handleSignChange}
                    required
                  />
                  <Form.Field> 
                    <Form.Input
                      type="file"
                      name="photo"
                      placeholder="upload image"
                      onChange={handleFileInput}
                    />      
                  </Form.Field>
                  
                  <Button
                    color="purple"
                    fluid size="large"
                    type="submit"
                    className="btn"
                    disabled={invalidForm}
                  >
                    {signError ? <ErrorMessage error={signError} /> : "Signup"}
                  </Button>
                  
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid>        
    </>
  );   
    
}