// react bootloader, start react here
// bind virtual dom and real dom

import React from 'react' // to create v.dom
import ReactDOM from 'react-dom' // patch real dom, event loop etc

// <h1 id=myheader>Hello React</h1>
// in react, all your views are written in JS only
const vdom = React.createElement('h1', {id: 'myheader'}, 'Hello React')

// JSX - JavaScript + XML
// internally with webpack + Babel, JSX is converted  into JS React.createElement
const vdomx = <h1 id='mytitle'>Hello JSX</h1>

// now render vdom in the real dom
// document is dom   object
//  <div id="root"></div>
const realDom = document.getElementById('root')


// This react functional component
// return virtual dom
function Hello() {
    console.log('hello called')
    return (
        <h1 id='mytitle'>Hello JSX</h1>
    ) 
}

// react shall run inside div root
ReactDOM.render(<Hello />, realDom)