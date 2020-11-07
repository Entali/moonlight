import React, { useCallback, useReducer } from 'react'
import { setUserAction, setErrorAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'
import { firestore } from '../../firebase'
import { UserModel } from './Auth.models'
import Button from '@material-ui/core/Button'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const makeUserRecord = (user: any) => {
    return user && user.uid && {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      img: user.photoURL
    }
  }

  const onClick = useCallback(async () => {
    try {
      const { user } = await googleAuth()
      const userRecord = await makeUserRecord(user)

      // in some reason there is undefined returns from promise
      // after setting user to DB
      await firestore
          .collection('users')
          .doc(userRecord.id)
          .set(userRecord)

      // that's why getter goes right after set
      const newUser = await firestore
          .collection('users')
          .doc(userRecord.id)
          .get()
          .then((doc) => doc.data())

      dispatch(setUserAction(newUser as UserModel))
      dispatch(setErrorAction(null))
      return newUser
    } catch (err) {
      dispatch(setErrorAction(err.message))
    }
  }, [])

  return (
      <section className="Auth">
        <Logo/>
        <Button
            onClick={onClick}
            disabled={state.error && true}
            variant="contained" color="primary" size="large"
        >
          enter
        </Button>
      </section>
  );
};

export default Auth
