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

const createNewUserRecord = async (user: UserModel, userRef: any, dispatch: any) => {
  const newUser = await makeUser(user)

  try {
    // writing to DB
    await userRef.set(newUser)
    // setting to store
    await dispatch(setUserAction(newUser as UserModel))
    dispatch(setErrorAction(null))
  } catch (err) {
    dispatch(setErrorAction(err))
  }

  return Promise.resolve(newUser)
}

const authAction = async (authMethod: any, dispatch: any) => {
  if (!authMethod) return

  const { user } = await authMethod()

  // check if it exists in DB
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapShot = await userRef.get()

  return Promise.resolve(
      snapShot.exists
      ? firestore
          .collection('users')
          .doc(user.uid)
          .get()
          .then(doc => doc.data())
      : createNewUserRecord(user, userRef, dispatch)
  )
}

export {
  authAction
}
