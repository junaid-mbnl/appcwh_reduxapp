import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

//createStore function takes reducers, initial state {}, and uske baad if Nem wants to apply some middleware - Nem can apply it
const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
