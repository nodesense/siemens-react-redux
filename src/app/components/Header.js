import React from 'react'

import {NavLink, Link} from 'react-router-dom'

// multi line fat arrow, return is explict
//PROPS - immutable, means, we cannot change value of props in child component
const Header = (props) => {
    //props are read only
    //props.title = 'Junk' // TypeError: Cannot assign to read only property 'title' of object
    // {} inside jsx is known as expression
    // destructuring
    const {title, slogan} = props
    return (
        <div>
            <h2> {title} </h2>
            <h6>{slogan}</h6>
            <NavLink to="/" exact className={"button"} activeClassName='success' >Home</NavLink>
            <NavLink to="/products" className={"button"}  activeClassName='success'  >Products</NavLink>
            <NavLink to="/cart" className={"button"}  activeClassName='success' >Cart</NavLink>
            <NavLink to="/checkout" className={"button"}  activeClassName='success'  >Checkout</NavLink>
            <NavLink to="/about" className={"button"}  activeClassName='success' >About</NavLink>
            <NavLink to="/counter" className={"button"}  activeClassName='success' >Counter</NavLink>
        </div>
    )
}

export default Header;