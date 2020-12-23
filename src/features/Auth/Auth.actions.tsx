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

const getUserRef = async (userAuth: any) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const newUser = makeUser(userAuth)

    try {
      await userRef.set(newUser)
    } catch (err) {
      console.error('Error creating user: ', err)
    }
  }

  return userRef
}

export {
  getUserRef
}
