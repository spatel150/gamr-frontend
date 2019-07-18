import React, { Component } from 'react'
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import * as cardSelector from './redux/reducer';
import * as cardActions from './redux/action';
import Card from './Card'

export class CardDetails extends Component {

    constructor(props){
        super(props);

        if(props.gameData.length === 0 ) props.loadGameData()
    }

    renderGames = (gameArray, username) => {
        console.log("Game Data", this.props.gameData, this.props.username.username)

        // debugger 
        return this.props.gameData.map((game, index) => {
            return(
                <Card name={game.Name} images={game.Images} description={game.Description} game_identifier = {game.ID} username = {this.props.username.username} price = {45}/>
            )
        })
    }

    render() {
        console.log('this.props.username :', this.props.username);
        return(
            <div>
                <h1> Buy Games </h1>
                {this.renderGames()}
                {/* {this.state.data.length > 0 ? this.renderCards(this.state.data): <div>Data not here yet</div>} */}
            {/* <MDBCol>
                <MDBCard style={{ width: "22rem" }}>
                <MDBCardTitle align="center">Game Name</MDBCardTitle>
                <MDBCardBody>
                <MDBCardImage className="img-fluid" src="https://images-na.ssl-images-amazon.com/images/I/91vdF5YgjVL._AC_SX215_.jpg" waves align="center" />
                <MDBBtn href="#">BUY</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        gameData: cardSelector.getGameData(state),
        user: cardSelector.getUserData(state),
        username: cardSelector.getUserData(state)
    }
}

function mapDispatchToProps(dispatch){
    return{
        loadGameData: (username) => dispatch(cardActions.loadGameData())
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(CardDetails)