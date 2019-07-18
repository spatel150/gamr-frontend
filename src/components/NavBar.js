import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

class NavBar extends Component {

    redirectToSignIn(){
        console.log('redirectsignin :');
        return(
            <Redirect to="/"/>
        )
    }

    redirectToCardDetails(){
        console.log('redirectcarddetails :');
        return(
            <Redirect to="/cardDetails"/>
        )
    }

    redirectToCart(){
        console.log('redirectcart :');
        return(
            <Redirect to="/cart"/>
        )
    }


    render() {
        return(
            <div>
                <div class="ui secondary  menu">
                <a class="active item" href="/"> SignIn
                {/* <div onClick={() => this.redirectToSignIn()}>
                    SignIn
                </div> */}
                </a>
                <a class="item" href="/cardDetails">CardDetails
                {/* <div onClick={() => this.redirectToCardDetails()}>
                    CardDetails
                </div> */}
                </a>
                <a class="item" href="/cart">Cart
                {/* <div onClick={() => this.redirectToCardDetails()}>
                    Cart
                </div> */}
                </a>
                <a class="active item" href="/checkout">Checkout
                </a>
                <a class="active item" href="/placeorder">Place Order</a>
                <div class="right menu">
                    <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..."/>
                        <i class="search link icon"></i>
                    </div>
                    </div>
                    <a class="ui item" href="/">Logout
                    {/* <div onClick={() => this.redirectToSignIn()}>
                    Logout
                    </div> */}
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar 