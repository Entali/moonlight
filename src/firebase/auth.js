import firebase from 'firebase/app'
import 'firebase/auth'

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
const signInWithGoogle = () => auth.signInWithPopup(provider)

export {
  signInWithGoogle
}

export default auth
