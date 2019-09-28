export const actionTypes = {
  OPEN_POST: "APP/OPEN_POST",
  CLOSE_POST: "APP/CLOSE_POST",
  DATA_RECEIVED: "APP/DATA_RECEIVED",
  USER_LOGGED_IN: "APP/USER_LOGGED_IN",
  USER_LOGGED_OUT: "APP/USER_LOGGED_OUT"
};

export const openPostAction = postId => ({
  type: actionTypes.OPEN_POST,
  postId
});

export const closePostAction = () => ({
  type: actionTypes.CLOSE_POST
});

export const dataRecevidedAction = data => ({
  type: actionTypes.DATA_RECEIVED,
  data
});

export const userLoggedInAction = loggedIn => ({
  type: actionTypes.USER_LOGGED_IN,
  data: loggedIn
});

export const userLoggedOutAction = loggedOut => ({
  type: actionTypes.USER_LOGGED_OUT,
  data: loggedOut
});
