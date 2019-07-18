import React, { Component } from 'react'
import NavBar from './NavBar';
import axios from 'axios'
import Suggestions from './components/Suggestions'

const API_KEY = '50b56d35b48cb5cf63b9ac8254554e1b78983741'
const {API_KEY} = process.env
const API_URL = 'https://xboxapi.com/v2/latest-xbox360-games'

class Search extends Component {
   state= {
       query = "",
       results = []
   }

   getInfo = () => {
       axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=10`)
       .then(({data}) => {
           this.setState({
               results: data.data
           })
       })
   }

   handleInputChange = () => {
       this.setState({
           query = this.state.value
       }, () => {
           if (this.state.query && this.state.query.length > 1 ) {
               if (this.state.query.length % 2 === 0 ) {
                   this.getInfo()
               }
           }
       })
   }

   render() {
       return (
           <NavBar>
               <input 
                placeholder="Search games"
                ref={input => this.search = input}
                onChange={this.handleInputChange}
            />
                <Suggestions results={this.state.results} />
           </NavBar>
       )
   }
}
export default Search