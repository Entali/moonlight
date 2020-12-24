const INITIAL_STATE: any = {
  currentUser: null
}

const authReducer = (state: any, action: any) => {
  switch (action.type) {
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
