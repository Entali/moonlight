import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// INIT
const config = {
  apiKey: "AIzaSyDpYkqWk3KbDnv1hCzX3dmOw3epcm-18mo",
  authDomain: "moonlight-by-entali.firebaseapp.com",
  databaseURL: "https://moonlight-by-entali.firebaseio.com",
  projectId: "moonlight-by-entali",
  storageBucket: "moonlight-by-entali.appspot.com",
  messagingSenderId: "373587262233",
  appId: "1:373587262233:web:05327cd85cf6a4b325e388"
}

firebase.initializeApp(config)


// AUTH
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
const googleAuth = () => auth.signInWithPopup(googleProvider)


// STORE
const firestore = firebase.firestore()

export {
  auth,
  firestore,
  googleAuth
}

export default firebase


