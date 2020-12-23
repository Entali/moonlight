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
    created: +new Date() // plus is converting date to timestamp
  }
}

const getUserRef = async (userAuth: any, dispatch: any) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  dispatch(setErrorAction(null))

  if (!snapShot.exists) {
    const newUser = makeUser(userAuth)

    try {
      await userRef.set(newUser)
      dispatch(setUserAction(newUser))
    } catch (err) {
      dispatch(setErrorAction(err))
    }
  }

  return userRef
}

export {
  getUserRef
}
