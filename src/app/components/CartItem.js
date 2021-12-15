// CartItem.js
import React, {Component, PureComponent} from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty


    // pre-defined method
    // called after react component mounted in real dom first time
    componentDidMount() {
        // triggre api call, set timer, subscribe, access real dom, ref
        console.log('CartItem componentDidMount')
   }

   // pre-defined method
   // called before removing a react component from memory/real dom
   componentWillUnmount() {
       // cancel pending api call, clear timer, unsubscribe
       console.log('CartItem componentWillUnmount')
   }
   
    render() {
        let {item,  // passed from cart list
             removeItem, // passed from cart comp via  cart list
             updateItem // passed from cart comp via  cart list
        } = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1)  }>
                        +1
                </button>    

                <button onClick={ () =>  updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () =>  removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}

export default CartItem;