import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as types from './redux/actionTypes'
import * as cardSelector from '../components/redux/reducer';

export class SignUp extends Component {

    state = {
        fetching: false,
        name: '',
        username: '',
        password: ''
    }

    handleSubmit = (e) => {
        this.setState({fetching: true})
        console.log("hitting handle submit")
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/signup", {
            method: "POST", 
            header: {
                "Content-Type": "application/json",
                "Access-Token": localStorage.getItem("token")
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json())
        .then (user => {
            console.log('user :', user);
            this.setState({fetching: false })
                this.props.history.push("/cardDetails")
            // this.props.updateUser(user.data)
        })
    }

    render() {
        return(
            <div>
                <h1 align="center"> GAMR </h1>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center' >
                        <Image src='https://static.vecteezy.com/system/resources/previews/000/357/555/non_2x/control-pad-vector-icon.jpg' font color='black' />Sign Up
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' name="name" placeholder='Name' onChange={(e) => {this.setState({name: e.target.value})}}/>
                        <Form.Input fluid icon='lock' iconPosition='left' name='username' placeholder='Username' onChange={(e) => {this.setState({username: e.target.value})}}/>
                        <Form.Input fluid icon='lock' iconPosition='left' name="password" placeholder='Password' type='Password' onChange={(e) => {this.setState({password: e.target.value})}}/>
                        <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                           Sign Up
                        </Button>
                        </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        user: cardSelector.getUserData(state)
    }
}

function mapDispatchToProps(dispatch){
    return{
        updateUser: (user) => dispatch({type: types.UPDATE_USER, payload: user})
    }
}

export default connect( mapStateToProps, mapDispatchToProps) (SignUp);