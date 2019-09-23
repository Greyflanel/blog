import { combineReducers } from "redux";
import postsReducer from "./postsReducer";


export default combineReducers({
    posts: postsReducer
});

/* dummy reducer to to ensure that app works while composing the rest of the code. */ 
// export default combineReducers({
//     dummy: () => "Hey, Hey, Hey"
// });