import { actionTypes } from "./Actions";

const defaultState = {
  posts: [
    {
      id: "0",
      title: "Hello",
      body: "Welcome back!"
    }
  ],
  loggedIn: window.localStorage.getItem("userLoggedIn"),
  openedPost: null
};

const postsReducer = (state = defaultState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.OPEN_POST:
      return { ...state, openedPost: action.postId };

    case actionTypes.CLOSE_POST:
      return { ...state, openedPost: null };

    case actionTypes.DATA_RECEIVED:
      return { ...state, posts: Array.from(action.data).concat() };

    case actionTypes.USER_LOGGED_IN:
      window.localStorage.setItem("userLoggedIn", "true");
      return { ...state, loggedIn: action.data };

    case actionTypes.USER_LOGGED_OUT:
      window.localStorage.clear("userLoggedIn");
      return { ...state, loggedIn: action.data };

    default:
      return state;
  }
};

export default postsReducer;
