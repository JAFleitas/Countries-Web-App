import rootReducer from "../Reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const { composeWithDevTools } = require('redux-devtools-extension')

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
    ,
   
);

export default store;
