import {combineReducers} from "redux";

import cartReducer from "./cartReducer";

let rootCartReducer = combineReducers({
    items: cartReducer
})

export default rootCartReducer;