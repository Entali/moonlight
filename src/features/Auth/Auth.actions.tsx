import { firestore } from '../../firebase'
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

const makeUser = (user: any) => {
  return user && user.uid && {
    id: user.uid,
    name: user.displayName,
    email: user.email,
    img: user.photoURL,
    created: new Date()
  }
}

const createUserRecord = async (authMethod: any, dispatch: any) => {
  if (!authMethod) return

  const userRef = firestore.doc('users/3878327468723648')
  const snapShot = await userRef.get()

  console.log('snapshot', snapShot)
}

export {
  setUserAction,
  setErrorAction,
  makeUser,
  createUserRecord
}
