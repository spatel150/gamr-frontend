import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import card from './components/redux/reducer';
import signup from './components/redux/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['card']
  }

const rootReducer = combineReducers({
    card: card,
    signup: signup
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


  
// const store = createStore(
//     combineReducers({
//         card: card,
//         signup: signup
//     }),
//     composeEnhancers(applyMiddleware(thunk)),
// );

// export default store;

// export default() => {
    export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
    export const persistor = persistStore(store)
//     return {store, persistor}
// }

// export const store;
// export const persistor;