// pages/Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        this.state = {
            items: [ 
            			{id: 1, name: 'P1', price: 100, qty: 10}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        //TODO:

        this.setState({
            items: [...this.state.items, item]
        })
 
    }
    
    // to be called by CartItem
    // we shall pass remoteItem, updateITem functions to child component CartList
    // CartList to pass remoteItem, updateITem functions CartItem
    // on button clicks, CartItem to call remoteItem, updateITem
    removeItem = (id) => {
        //TODO
        console.log('removeItem', id)

        this.setState({
            items: this.state.items.filter (item => item.id != id)
        })
    }

    // to be called by CartItem
    updateItem = (id, qty) => {
        console.log('updateItem', id, qty)
        //TODO

        const items = this.state.items.map (item => {
            if (item.id === id) {
                return {...item, qty}
            } 

            return item; // without change
        })

        this.setState({items}); // calls render, before it calls getDrivedStateFromProps

    }

    empty = () => {
        //TODO
         this.setState({
             items: [] // new array
         })
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0, 
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    // called before render function on initial mount, update mount
    // return new state based on any props change or state change
    static getDerivedStateFromProps(props, state) {
        console.log('Cart getDerivedStateFromProps', props, state)
        //TODO: business logic before render 
        // return new state calculated using business logic

        let count = 0, 
        amount = 0;

        for (let item of state.items) {
            amount += item.price * item.qty;
            count += item.qty;
        }
        
        // return new state, this values shall be updated in this.state
        return {
            amount, //es6 feature, amount: amount
            count 
        }
    }

    //TODO:
    //componentWillMount
    
    
    render() {
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={this.removeItem}
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;