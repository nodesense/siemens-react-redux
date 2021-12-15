import {createStore, combineReducers, applyMiddleware, bindActionCreators} from 'redux';
import { addItem, empty } from './redux-cart/state/actions';
import rootCartReducer from './redux-cart/state/reducers';

const rootReducers = combineReducers({
    cart: rootCartReducer
})


function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log('logger dispatching', action)

            let result = next(action)
            
            console.log('logger next state', store.getState())
            return result
        }
    }
}

// create store

// as soon we create store, store shall call all reducers
// to initialize default value
const store = createStore(rootReducers, applyMiddleware(loggerMiddleware))


export default store; 


// after every dispatch, subscribe is called given there is change in state
store.subscribe ( () => {
    console.log("SUBSCRIBE called, STATE ", store.getState())
})

console.log('STATE', store.getState())


/*
 state = {
     cart: {
         items: [
             {id:1, name:'p1', qty:1, price: 100}
         ]
     }
 }

*/

let action =  addItem ({name: 'p1', id: 1, qty: 1, price: 100})
console.log('action is ', action)
// calls reducers with current state and action
store.dispatch(action)

console.log('STATE', store.getState())

//EMPTY the CART
// action = empty()
// console.log('action ', action)
// store.dispatch(action)

// bindActionCreator - binding dispatch and action creator together

// bindActionCreators returns a function, that calls action creator,
//    get action and dispatch action 
const empty2 = bindActionCreators(empty, store.dispatch)

empty2(); // internally it create action and dispatch to store