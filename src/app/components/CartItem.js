// CartItem.js
import React, {Component} from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty
   
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