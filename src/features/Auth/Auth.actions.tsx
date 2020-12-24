import { firestore } from '../../firebase'
import { UserModel } from './Auth.models'

const setUserAction = (user: UserModel) => ({
  type: 'SET_USER',
  payload: user
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
  const newUser = makeUser(userAuth)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    try {
      await userRef.set(newUser)
    } catch (err) {
      console.error('Auth: error while creating user')
    }
  }

  return userRef
}

export {
  getUserRef,
  setUserAction
}
