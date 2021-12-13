import React from 'react';

import PROP_TYPES from 'prop-types';

// ES6 method, single line statement
// no return statement
// functional component with parameter destrucruting
// year, company coming from props
const Footer = ({year, company}) => (
    <div>
        <hr />
        <p>Copyrights @{year}, {company.toUpperCase()}</p>
    </div>
)

// defaultProps
// if the parent component doesn't pass values, the defaults used
Footer.defaultProps = {
  //  year: 2021,
    company: 'Your company, Inc'
}

// validate the prop data types, 
// whether prop is required or not
// a warning displayed on console
Footer.propTypes = {
    year: PROP_TYPES.number.isRequired,
    company: PROP_TYPES.string
}

export default Footer;