import * as types  from "./actionTypes"
import axios from 'axios';

export function loadGameData(){
    return dispatch => {
        fetch('https://xboxapi.com/v2/latest-xbox360-games', {
            method: 'GET',
            headers: {
                'X-Auth': '50b56d35b48cb5cf63b9ac8254554e1b78983741'
            }
        }).then(response => response.json()).then((response) => {return dispatch({type: types.UPDATE_GAMEDATA, payload: response})}) 
    }
}

export function loadUserCartData(username){
    console.log('username!!! :', username);
    let arr = []
    return dispatch => {
        axios.get('http://localhost:3000/api/v1/purchases/'+username).then((resp) => {
            
        resp.data.forEach((item, i) => {
            arr.push(item.game_identifier)
        })

        

        return dispatch({type: types.UPDATE_CARTITEMS, payload: arr})})
    }
}



