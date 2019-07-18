import * as types from './actionTypes';
import Immutable from 'seamless-immutable'

const initialState = Immutable({
    gameData: [],
    user: {},
    signUp: {},
    cartItems: []
})

export default function reduce(state = initialState, action = {}){
    switch(action.type){
        case types.UPDATE_GAMEDATA:
            return{
                ...state,
                gameData: action.payload
            }
        case types.UPDATE_USER:
            return{
                ...state,
                user: action.payload
            }
        case types.GET_USER:
            return {
                ...state,
                username: action.payload
            }
        case types.UPDATE_CARTITEMS:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
        return state;
    }
}

export const getGameData = state => state.card.gameData
export const getUserData = state => state.card.user
export const getSignUpData = state => state.card.username
export const getCartItems = state => state.card.cartItems