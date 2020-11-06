const INITIAL_STATE: any = {
  isLogged: false,
  currentUser: null
}

const authReducer = (state: any, action: any) => {
  switch(action.type) {
    case 'SET_AUTH':
      return {
        ...state,
        isLogged: !state.isLogged
      }
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export {
  INITIAL_STATE,
  authReducer
}
