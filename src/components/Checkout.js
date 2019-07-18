import React, {Component} from 'react'

class Checkout extends Component {

  state = {
    full_name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
    
  }

    handleCheckout = (e) => {
      e.preventDefault()
        fetch('http://localhost:3000/api/v1/checkout', {
            method: "POST", 
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.strigify(this.state)
        }).then(res => res.json())
    }
  
    render() {
        return(
            <div>
            <h1> Checkout </h1>
            <div class="row">
            <div class="col-75">
                <div class="container">
                </div>
                <form action="/action_page.php">
            
        <div class="row">
          <div class="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

        </div>
        <button class="ui blue button" handleCheckout={this.handleCheckout}>Place Order </button>
      </form>
    </div>
    </div>
    </div>
        )
    }
}

export default Checkout

