// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent

 class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* we cannot write statement in jsx, no for loop, no if condition */}
                    {/* expressions are allowed */}

                    {
                        items.map(item => <CartItem item={item} 
                                                    updateItem={this.props.updateItem}
                                                    removeItem={this.props.removeItem}   
                        />)
                    }

                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;