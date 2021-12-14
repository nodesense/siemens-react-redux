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
    // to decide whether to call render function or not in update cycle
    // return true - render shall be called, there is data change in props or state
    // return false - render shall not be called, there is no data change
    // is not called when we do this.forceUpdate
    // called when parent render called or this.setState on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartList shouldComponentUpdate')
        console.log("CartList next props, state", nextProps, nextState)
        console.log("CartList current props, state", this.props, this.state)

        console.log('nextProps.items !=  this.props.items', nextProps.items !=  this.props.items)
        // you may compare all props and all state params
        return nextProps.items !=  this.props.items;
    }
    
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
                                                    key={item.id}
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