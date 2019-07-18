import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as cardSelector from './redux/reducer';
import * as cardActions from './redux/action';
import _ from 'lodash'

export class Cart extends Component {

    //WHEN YOU DO FETCH PASS
    //this.props.user.username
    constructor(props){
        super(props);

        // this.state = {
        //     gameID: []
        // }

        props.loadUserCartData(this.props.user.username)
    }
    
    displayCartItems = (gameData, cartItems) => {
        let uniqueCartItems = _.uniq(cartItems)

        // console.log('gameData :', gameData.some(r => cartItems.indexOf(r)));
        var result = gameData.filter((o1) => {
            return cartItems.some((o2) => {
                return o1.ID === o2
            })
        })

        console.log('gameData :', gameData);

        return result.map((item, i) => {
            return(
                <div class="item" align="center">
                <div class ="col-25"></div>
                <br/>
                    <p align="center">{item.Name } <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p> 
                </div>
            )
            
        })

    }

    handleCart = () => {
            // e.preventDefault()
            fetch('http://localhost:3000/api/v1/purchases/', {
              method: "GET", 
              headers: {
                "Content-Type": "application/json"
              },
            }).then(res => res.json())
    //         // .then(console.log("hitting this"))
    }

    // getGameID = () => {

    // }

    // removeFromCart = (name, id, username) => {
    // //     // this.setState({fetching: true})
    // //     fetch('http://localhostp:3000/api/v1/purchases/', {
    // //           method: "DELETE", 
    // //           headers: {
    // //             "Content-Type": "application/json"
    // //           },
    // //           body: JSON.stringify(this.state)
    // //         }).then(res => res.json())
    // //         // .then(purchase => {
    // //         //     this.setState({fetching: false})
    // //         // })
    // }

    render() {
        console.log('this.props.user :', this.props.user);
        return(
        <div>
            <div class ="col-25"></div>
            <div class="container">
            <h4 align="center"> GAMR- Cart 
            <span className="price" style={{color:"black", float:"none"}}>
            <i className="fa fa-shopping-cart"></i> 
            {this.displayCartItems(this.props.gameData, this.props.cartItems)}
            <b></b>
            </span>
            </h4>
            {/* <p>Snipers <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p> 
            <p>RESIDENT EVIL REV. <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p> 
            <p>Ninja Gaiden Black <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p> 
            <p>Dead Island Riptide <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Ride to Hell: Retribution <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Armed and Dangerous <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Splinter Cell <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Crimson Skies High Road To Revenge <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Jade Empire <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Splinter Cell Double Agent <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Sphinx and the Cursed Mummy <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>BLACK <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>Indiana Jones and the Emperor's Tomb <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>
            <p>UC2 <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p> 
            <p>Splinter Cell Pandora Tomorrow <span className="price">$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35}</span></p>  */}
            {/* <hr></hr>
            <p>Total <span className="price" style={{color:"black"}}><b>$ {Math.floor(Math.random() * (Math.floor(90) - Math.ceil(35)+1)) + 35 * 5} </b></span></p> 
             <button className="ui blue button" onClick={this.handleCart}>
             Proceed to Checkout </button>  */}
            </div>
        </div> 
        )
    }
}

function mapStateToProps(state){
    return{
        user: cardSelector.getUserData(state),
        cartItems: cardSelector.getCartItems(state),
        gameData: cardSelector.getGameData(state)
    }
}

function mapDispatchToProps(dispatch){
    return{
        loadUserCartData: (username) => dispatch(cardActions.loadUserCartData(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)