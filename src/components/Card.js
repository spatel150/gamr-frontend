import React, {Component} from 'react'

class Card extends Component{

    constructor(props){
        super(props)

    }

    state = {
        username: this.props.username,
        name: '',
        game: ''
        // data: this.state.gameData
    }

    addToCart = (purchase) => {
        fetch('http://localhost:3000/api/v1/purchases', {
            method: "POST", 
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
          }).then(res => {console.log(res.json())})
  }

  retrieveFromCart = (username) => {
      fetch('http://localhost:3000/api/v1/purchases/', {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          },
      }).then(res => (res.json()))
        //  this.setState({        
        //     cart: cart.concat(game.Name     //   })
    }


    renderBoxArt(images){
        // debugger
        let img = images.find(image => image.Purpose === 'BoxArt')
        // console.log('img :', img.ResizeUrl);
        // let arr = img.ResizeUrl;
        if(img != undefined){
            return(
                <div>
                    <img src={img.ResizeUrl}/>
                </div>
            )
        }else{
            console.log("hitting else");
            return(     
                <div>
                    NO IMAGE FOUND
                </div>
            )
        } 
    }

    
    render(){
        return(
            <div className="card">
                <div className="name">
                    {this.props.name}
                </div>
                <div className="image">
                    {/* <img src={props.game.img}/> */}
                    {this.renderBoxArt(this.props.images)}
                </div>
                <div>
                    {this.props.description}
                </div>
                
                <button onClick={(e) => {
                    let purchase = {price: 45, game_identifier: this.props.game_identifier, username: this.props.username}
                    this.addToCart(purchase)
                    }}>BUY</button>
            </div>
        )
    }
}

export default Card;