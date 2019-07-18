import React, {Component} from 'react'

class PlaceOrder extends Component {
    render() {
        return(
        <div class="ui segment">
            <h2 class="ui left floated header"> {this.props.username}</h2>
            <h2 class="ui center floated header">GAMR- Your Order Has Been Placed</h2>
            <div class="ui clearing divider"></div>
            <p>Thank you for shopping at GAMR online store. Your purchase
                is very valuable to us. If you are not satisfied with your purchase, please return
                within 30 days for a full money back guarantee. Prices are subject to change at any
                time. Refunds will not be given after 30 days have passed. Shipping and tax rates apply.  
            </p>
            <p> 
            Your games will arrive in 2-3 days at the time of this order. Please make sure you have all the games
            as requested. If any of the items are missing, you can give us a call at any time at 123-345-6789, and we will
            send you the remaining games free of charge. GAMR is proud to provide you with the newest and highest quality games at 
            reasonable and competitive prices. 
            </p>
        </div>
        )
    }
}

export default PlaceOrder