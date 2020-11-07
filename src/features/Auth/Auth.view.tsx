import React, { useCallback, useReducer } from 'react'
import { setUserAction, setErrorAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Button } from 'primereact/button'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'
import { firestore } from '../../firebase'
import { UserModel } from './Auth.models'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(async () => {
    try {
      const { user } = await googleAuth()
      if (user && user.uid) {
        // in some reason there is undefined returns from promise
        // while setting user to DB
        await firestore
            .collection('users')
            .doc(user.uid)
            .set({
              id: user.uid,
              name: user.displayName,
              email: user.email,
              img: user.photoURL
            })
        // that's why getter goes right after set
        const userRecord = await firestore
            .collection('users')
            .doc(user.uid)
            .get()
            .then((doc) => doc.data())

        if (userRecord && userRecord.id) {
          dispatch(setUserAction(userRecord as UserModel))
        }
      }
    } catch (err) {
      dispatch(setErrorAction(err.message))
    }
  }, [])

  return (
      <section className="Auth">
        <Logo/>
        <Button
            onClick={onClick}
            className="p-button-outlined p-button-danger"
        >
          enter
        </Button>
      </section>
  );
};

export default Auth
