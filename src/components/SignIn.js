import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as types from './redux/actionTypes'

class SignIn extends Component { 

    state= {
        username: '',
        password: '',
        errors: '',
    }

    displayErrors = () => {
        // displayErrors = () => {
            // if (this.state.errors.length > 0) {
                return (
                    <div className= "form-errors">
                        <ul> 
                            {this.state.errors}
                        </ul>
                    </div>
                )
            //     } else {

            //         return null;
            // }   
        }
    
    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
            }).then(res => res.json())
            .then(data => {
                console.log('data :', data);
                this.props.updateUser(data.user)
                console.log(data.token)
            if (data.errors) {
                this.setState({ errors: data.errors })
            } else {
                localStorage.setItem("token", data.token)
                this.props.history.push("/cardDetails")
            }
        }).catch()
    }

    render() {
        return (
            <div>
                <h1> Welcome to GAMR </h1>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='https://static.vecteezy.com/system/resources/previews/000/357/555/non_2x/control-pad-vector-icon.jpg' />Sign In to GAMR
                    </Header>
                    <Form size='large' onSumbit= {this.handleSubmit}>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' name= 'username' placeholder='Username' onChange={(e) => {this.setState({username: e.target.value})}} />
                        <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' name= 'password' type='password' onChange={(e) => {this.setState({password: e.target.value})}}/>
                        <Button color='teal' fluid size='large' onClick= {this.handleSubmit}>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Need an account? <a href='#'>Sign Up</a>
                        {this.displayErrors()}
                    </Message>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{

    }
}

function mapDispatchToProps(dispatch){
    return{
        updateUser: (user) => dispatch({type: types.UPDATE_USER, payload: user})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)