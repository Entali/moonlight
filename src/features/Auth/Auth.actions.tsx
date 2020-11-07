import { UserModel } from './Auth.models'

const setUserAction = (user: UserModel) => ({
  type: 'SET_USER',
  payload: user
});

const setErrorAction = (error: string) => ({
  type: 'SET_ERROR',
  payload: error
});

export {
  setUserAction,
  setErrorAction
}
