// no curly brace, importing default
// by default imports are alias name 
import ReactDOM from "react-dom";

//webpack feature
// collect all css import into separate css file
import './index.css'

import store from './app/store';
import {Provider} from 'react-redux';

// App is default export
import  App from './app/App';

// PRovider expose the store object to all containers as React Context
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                ,document.getElementById('root'))