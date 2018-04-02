import React from 'react'
import {Button, Form, Grid, Header, Segment} from 'semantic-ui-react'
import './loginComponent.css'

const LoginComponent = () => (
    <div className='login-form'>
        <Grid
            textAlign='center'
            style={{height: '100%'}}
            verticalAlign='middle'
        >
            <Grid.Column style={{maxWidth: 450}}>
                <Header as='h2' color='teal' textAlign='center'>
                    {' '}Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input
                            fluid
                            icon='user'
                            iconPosition='left'
                            placeholder='User id'
                            onChange={handleIDChange}
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                        />

                        <Button color='teal' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </div>
)

const handleIDChange = (e) => {
    console.log(e);
    alert("아이디 변경");
}

export default LoginComponent