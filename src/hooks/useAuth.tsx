import {useEffect, useReducer} from 'react'
import {auth} from '../firebase'
import {createUserRef, setUserAction} from '../features/Auth/Auth.actions'
import {UserModel} from '../features/Auth/Auth.models'
import {
  authReducer,
  INITIAL_STATE as AUTH_INITIAL_STATE
} from '../features/Auth/Auth.reducer'

const useAuth = () => {
  let unsubscribeFromAuth: any = null
  const [authState, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const {currentUser} = authState

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserRef(userAuth)

        userRef.onSnapshot(snapshot => {
          dispatch(setUserAction(snapshot.data() as UserModel))
        })
      }

      dispatch(setUserAction(null))
    })

    return () => unsubscribeFromAuth()
  }, [])

  const logout = () => dispatch(setUserAction(null))

  return {currentUser, logout}
}

export default useAuth
