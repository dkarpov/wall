const defaultState = {
  posts: [{
    id: '0', 
    title: 'Hello',
    body: 'Welcome back!',
  }], loggedIn: false
}

const postsReducer = (state = defaultState, action) => {
  switch(action.type){
    case "USER_LOGIN":
      return {...state, loggedIn: true};
      
    case "DATA_LOADED":
      return state.posts = [...state.post, ...action.data];
      
    default:
      return state;
  }
  return state;
}

export default postsReducer;