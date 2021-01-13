import {UserModel} from '../../App'
import {firestore} from "../../firebase";

const createUserProfileDocument = async (userAuth: any) => {
  if (!userAuth) return null

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  const currentUser: UserModel = userAuth && {
    name: userAuth.displayName,
    email: userAuth.email,
    img: userAuth.photoURL,
    created: new Date()
  }

  if (!snapShot.exists) {
    try {
      await userRef.set(currentUser)
    } catch (err) {
      console.error('createUserProfileDocument error: ', err)
    }
  }

  return currentUser
}

export {
  createUserProfileDocument
}
