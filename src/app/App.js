import React from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import Counter from './components/Counter';
import Footer from './components/Footer';
import FuncCounter from './components/FuncCounter';
import Header from './components/Header';


 


// composing components together to build page/app
// Hierachy is build, 
// App [parent]
//  |
//  |---Header [child]
//  |---Footer[child]


// Passing data from parent to child?
// props - properties [object], {key: value}
//  <Header slogan="new year sale" title="Product App"
//     {slogan: 'new year sale',
//        title : 'Product app'} passed as props to child component
function App() {
    return (
        <div>
            <Header title='Product App'
                    slogan='new year sale!!'
            />

            <Checkout />

            {/* <Cart /> */}

            {/* <FuncCounter startValue={100} />
            <hr />
            <FuncCounter startValue={600} />
            <hr />

            <Counter startValue={1000} />

            <hr />

            <Counter startValue={50} /> */}

            <Footer year={2021} company='XYZ, Inc' />
        </div>
    )
}

//TODO: containers, higher function functions, wrappers
// while importing, import without curly brace
export default App;