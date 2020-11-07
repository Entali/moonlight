import { UserModel } from './Auth.models'

type ErrorType = string | null

const setUserAction = (user: UserModel) => ({
  type: 'SET_USER',
  payload: user
});

const setErrorAction = (error: ErrorType) => ({
  type: 'SET_ERROR',
  payload: error
});

export {
  setUserAction,
  setErrorAction
}
