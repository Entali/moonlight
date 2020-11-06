const INITIAL_STATE: any = {
  currentUser: null
}

const authReducer = (state: any, action: any) => {
  switch(action.type) {
    case 'SET_USER':
      const user = action.payload.user
      return {
        ...state,
        currentUser: {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          avatar: user.photoURL
        }
      }
    default:
      return state;
  }
}

export {
  INITIAL_STATE,
  authReducer
}
