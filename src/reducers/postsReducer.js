
/*Common Syntax for reducers*/ 
export default (state =  [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
            default: 
            return state;
    }
};

/* Rules of Reducers
Must return any value besides 'undefined'

Produces 'state', or (data) to be used inside of
 your app using only previous state and the action

 Must not return or (reach 'outside of itself' to decide what value to return. (Reducers must be pure functions).

 Must not mutate its input ('state') argument.
 */

