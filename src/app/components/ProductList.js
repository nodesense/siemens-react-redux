import React, { Component } from 'react';

import axios from 'axios';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [], loading: false }
        console.log('ProductList Created')
    }

    // pre-defined method
    // called after react component mounted in real dom first time
    componentDidMount() {
         // triggre api call, set timer, subscribe
         console.log('ProductList componentDidMount')

         axios.get('http://localhost:7070/api/products')
              .then (response => {
                  console.log("products", response.data)

                  this.setState({products: response.data})
              })
    }

    // pre-defined method
    // called before removing a react component from memory/real dom
    componentWillUnmount() {
        // cancel pending api call, clear timer, unsubscribe
        console.log('ProductList componentWillUnmount')
    }


    render() { 
        return ( 
            <div>
                <h2>Product List</h2>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map ((product, index) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default ProductList;