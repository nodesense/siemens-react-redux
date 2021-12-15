import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// from redux cart/components
import Cart from '../components/Cart';

import * as actions from '../state/actions';
import  {addItem, empty} from '../state/actions';


// state is input, passed by container
// this function called first time when component created
// whenever there is subscribe called inside container
// container shall this method, this method to return props [for react] from state [redux]
const mapStateToProps = (state) => {
    return {
        total: state.cart.items.length
    }
}

// addItem, function, that dispatch action
// getState, dispatch both from store
// return functions that shall be passed as props
const mapDispatchToProps = (dispatch, getState) => {
    return { 
        addItem:   () => {
            // create action and dispatch action
            // create action - action creator addItem
            // dispatch - passed as parameter

            let id = 3000 + Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = actions.addItem(item)
            dispatch(action)
        },

        // this will wrap all functions inside actions module with dispatch
        actions: bindActionCreators(actions, dispatch)
    }
}


// put together all to create a container component
// higher order componnent, a component that host another component
const CartContainer = connect(mapStateToProps, mapDispatchToProps) (Cart)

export default CartContainer