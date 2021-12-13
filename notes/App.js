import React from 'react';

// named export, while importing, we should use {}
// import {App} ...
export function App() {
    return (
        <div>
            <h2>Product App</h2>
        </div>
    )
}

// only one export default is allowed per module
// module means a file
// while importing default export, we use any alias name
// without {}
// import App2 from ... or
// import MyApp from .... MyApp and App2 are same/alias
export default function App2() {
    return (
        <div>
            <h2>Product App2</h2>
        </div>
    )
}