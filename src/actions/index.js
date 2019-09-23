import _ from "lodash"
import jsonPlaceholder from "../apis/jsonPlaceholder";


/* Whenever we call an action creator from inside of an action creator, we must make sure that we dispatch the result of the action creator and not the creator itself.*/
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
 
 _.chain(getState().posts)
 .map('userId')
 .uniq()
 .forEach(id => dispatch(fetchUser(id)))
 .value()
};

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
  


// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
//   };
// /* One-time Memoization using lodash, to avoid multiple Network calls for the same data.*/
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
