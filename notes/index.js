// no curly brace, importing default
// by default imports are alias name 
import ReactDOM from "react-dom";

// App2 is default export, App is named export 
import App2, {App} from './app/App';


ReactDOM.render(<App2 />,   document.getElementById('root'))
