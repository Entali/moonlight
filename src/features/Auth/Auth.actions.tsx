const setAuthAction = () => ({
  type: 'SET_AUTH'
});

const setUserAction = (user: any) => ({
  type: 'SET_USER',
  payload: user
});

export {
  setAuthAction,
  setUserAction
}
