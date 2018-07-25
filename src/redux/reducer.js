import { actionTypes } from './actions';

const defaultState = {
  posts: [{
    id: '0',
    title: 'Hello',
    body: 'Welcome back!',
  }], loggedIn: false, openedPost: null
}

const postsReducer = (state = defaultState, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.OPEN_POST:
      return { ...state, openedPost: action.postId };

    case actionTypes.CLOSE_POST:
      return { ...state, openedPost: null };

    case actionTypes.DATA_RECEIVED:
      return { ...state, posts: Array.from(action.data).concat() };

    default:
      return state;
  }
}

export default postsReducer;