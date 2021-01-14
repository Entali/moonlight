import {firestore} from '../../firebase'

const createUserProfileDocument = async (userAuth: any) => {
  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    try {
      const { uid, displayName, email, photoURL } = userAuth
      await userRef.set({
        id: uid,
        name: displayName,
        email,
        photoURL,
        created: new Date()
      })
    } catch (err) {
      console.error('createUserProfileDocument error: ', err)
    }
  }

  return userRef
}

export {
  createUserProfileDocument
}
