import React from 'react';

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
        </div>
    )
}

//TODO: containers, higher function functions, wrappers
// while importing, import without curly brace
export default App;