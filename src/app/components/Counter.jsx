import React, {Component} from 'react';

//State, es6 methods, resolving this, events
// Class component
//      State- a component own it, mutate it
//      A control over render method during update cycle , shouldComponentUpdate / PureComponent
//      a life cycle methods, what should be done after componnent created, componentDidMount
//      what should done before component destroyed, componentWillUnmount

class Counter extends Component {
    // if child class constructor written, the base class constructor super must be called
    constructor(props){
        // the base class constructor initialize this.props = props
        super(props); // base class  Component constructor
        console.log('Counter created', this.props)

        // state, keyword
        // initialize state
        // owned by component, the values can be mutated/changed
        // values should be changed by using setState method
        this.state = {
            counter: props.startValue,
            clickCount: 0,
            title: 'Counter'
        }
    }

    // ES6 function
    increment() {
        console.log('increment called,  this is ', this)
        //BAD
        //this.state.counter++ // direct mutation shall have side effects

        //GOOD PART
        // setState is async, the new value is not assigned immediately
        console.log("STATE before ", this.state)
        // calling setstate will  trigger render function async but NOT IMMEDIATELY but after state update/merge
        this.setState({
            counter: this.state.counter + 1
        })

        // SIDE effect of async, this.state.counter on previous is not yet changed
        // no change in output, counter woun't increment twice

        this.setState({
            counter: this.state.counter + 1
        }) 

        // will it trigger render twice? NO
        // on the same function callstack, on same event batch execution
        // render is not called immediately
        // 
        this.setState({
            clickCount: this.state.clickCount + 1
        })

        console.log("STATE after ", this.state)
    }

    //Cons: this approach calls render function twice
    //setState with callback
    incrementTwice = () => {
        // setState has callback, that will be called once state is updated and after render function

        this.setState({
            counter: this.state.counter + 1
        }, () => {
            //callback from react , this method is called after updating state, after calling render function
            console.log("setState callback")
            this.setState({
                counter: this.state.counter + 1
            })
        }  ) 
    }

    //ES.NEXT way of solving this context issue
    //RECOMMENDED approach
    // functional set state
    // Render to be called only once
    decrement = () => {
        console.log('decrement called,  this is ', this)
        // this to solve depedent setState using functional setState
        // setState will accept a callback, call the callback at the time of merge state
        console.log('functional setState 1')

        // output of setState callback is passed as input to next setState callback
        this.setState (  (prevState) => {
             console.log('functional setState 1 callled ', prevState)
             // return new state
             return {
                 counter: prevState.counter - 1
             }
        } )

        console.log('functional setState 1 after')

        console.log('functional setState 2')

        //prevState is the value from previous setstate callback
        this.setState (  (prevState) => {
             console.log('functional setState 2 callled ', prevState)
             // return new state
             return {
                 counter: prevState.counter - 1
             }
        } )

        console.log('functional setState 2 after')
    }

    test = () => {
        //forceUpdate trigger the render async
        // when there is no state to update, but still if you want render
        // 3rd party tools, set graph/render graph etc
        this.forceUpdate(); 
    }

    // react keyword function
    // should create v.dom and return
    // invoked by react
    // render function create v.dom and return v.dom to react
    // react diff snapshot [previous v.dom] with current one
    // if any difference, it patch the real dom
    render() {
        console.log('Counter render', this.state)
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>Counter is {this.state.counter}</p>
                <p>Click count  is {this.state.clickCount}</p>
                {/*  jsx comment   */}
                {/* events are callabck, on click event, increment function is called */}
                <button onClick={this.increment} >+1/this/undefined</button>
               
                {/* ES6 way of resolving this */}
                <button onClick={() => this.increment()} >+1/this</button>
                {/* ES5 way of binding */}
                <button onClick={ this.increment.bind(this)} >+1/bind/this</button>
                
                  {/* ES.next way */}
                <button onClick={this.incrementTwice}>+1 +1</button>
               
                {/* ES.next way */}
                <button onClick={this.decrement}>-1</button>

                <button onClick={this.test}>force update</button>
            </div>
        )
    }
}

export default Counter;