const INITIAL_STATE = {
  uid: '',
  userId: '',
  userName: '',
  userEmail: '',
  userType: '',
  userProfileUrl: '',
  usuarioLogado: 0,
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        usuarioLogado: 1,
        userId: action.userId,
        userName: action.userName,
        userEmail: action.userEmail,
        userType: action.userType,
        userProfileUrl: action.userProfileUrl,
        uid: action.uid
      };
    case 'LOG_OUT':
      return {
        ...state,
        usuarioLogado: 0,
        userId: null,
        userName: null,
        userEmail: null,
        userType: null,
        userProfileUrl: null,
        uid: ''
      };
    default:
      return state;
  }
}

export default userReducer;