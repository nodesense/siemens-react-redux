import React from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

import Counter from './components/Counter';
import Footer from './components/Footer';
import FuncCounter from './components/FuncCounter';
import Header from './components/Header';

import { BrowserRouter as Router, 
         Route,
         Switch
} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
 
import ReduxCart from './redux-cart/containers/Cart';


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
        <Router>
            <div>
                <Header title='Product App'
                        slogan='new year sale!!'
                />

                {/* Switch picks the first matched router */}
                 <Switch>
                    <Route path="/about" component={About} />

                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/checkout">
                        <Checkout />
                    </Route>

                    <Route path="/products">
                        <ProductList />
                    </Route>

                    <Route path='/redux-cart'>
                        <ReduxCart />
                    </Route>

                    <Route path="/counter" render={ () => <Counter startValue={0} />  }>
                    </Route>

                    {/* by default, route match starts with 
                        /mypage
                        /counter shall match with Route path="/"

                        excat property, force route to check exact match, not start with
                    */}

                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path='*'>
                        <NotFound />
                    </Route>

                    </Switch>
                

                {/* <Checkout /> */}
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
        </Router>
    )
}

//TODO: containers, higher function functions, wrappers
// while importing, import without curly brace
export default App;