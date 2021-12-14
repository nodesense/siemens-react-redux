// no curly brace, importing default
// by default imports are alias name 
import ReactDOM from "react-dom";

//webpack feature
// collect all css import into separate css file
import './index.css'


// App is default export
import  App from './app/App';

ReactDOM.render(<App />,   document.getElementById('root'))