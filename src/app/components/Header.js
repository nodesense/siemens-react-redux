import React from 'react'

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
        </div>
    )
}

export default Header;