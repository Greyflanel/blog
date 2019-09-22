import { combineReducers } from "redux";


/* dummy reducer to to ensure that app works while composing the rest */ 
export default combineReducers({
    dummy: () => "Hey, Hey, Hey"
});