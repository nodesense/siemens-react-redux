
import React from "react";
import PropTypes from "prop-types";

//TODO: container
import CartList from "../containers/CartList";
import CartSummary from "../containers/CartSummary";

export default function Cart(props) { 
        return (
            <div> 
            <h2>Cart - {props.total} items</h2>


            <button onClick={ ()=> props.addItem()}>
              Add
            </button>

            {/* actions.empty is a bindactioncreator method, dispatch empty action */}
            <button onClick={ ()=> props.actions.empty()}>
              Empty
            </button>
 

            <CartList 
            />

            <CartSummary 
            />


            </div>
        )
} 


Cart.defaultProps = {
    
}

Cart.propTypes = {
    
}