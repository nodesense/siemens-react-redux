import React from 'react'

// multi line fat arrow, return is explict
const Header = (props) => {
    // {} inside jsx is known as expression
    // destructuring
    const {title, slogan} = props
    return (
        <div>
            <h2> {title} </h2>
            <h6>{slogan}</h6>
        </div>
    )
}

export default Header;