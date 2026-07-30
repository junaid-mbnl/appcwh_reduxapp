import { combineReducers } from "redux";
import amountReducer from './amountReducer'

const reducers=combineReducers({
    amount: amountReducer,
    //Nem can return more using commans in case Nem has more reducers.
})
export default reducers;