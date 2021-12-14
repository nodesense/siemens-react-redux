// working with input controls
// formik
// working with ref
import React from 'react';


class Checkout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            city: ''
        }
    }

    valueChangeHandler = (e) => {
        const {name, value} = e.target; // target is real dom reference, input, select tag
        console.log('change handler', name, value)
        // update the state, so that virutal dom shall be updated, keep inline with real dom
        this.setState ({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form>
                    Name <input name="name" type="text" 
                                value={this.state.name}
                                onChange={this.valueChangeHandler}
                                />
                    City <select name="city"   
                                 value={this.state.city}
                                 onChange={this.valueChangeHandler}
                    >
                        <option value="CH">Chennai</option>
                        <option value="BLR">Bengaluru</option>
                        <option value="MY">Mysore</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Checkout;