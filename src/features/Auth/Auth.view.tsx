import React, {useCallback, useReducer} from 'react'
import { setUserAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Button } from 'primereact/button'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'
import { firestore } from '../../firebase'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(() => {
    googleAuth()
        .then(({ user }) => {
          const userRecord = {
            id: user?.uid,
            name: user?.displayName,
            email: user?.email,
            img: user?.photoURL
          }
          // пишу в базу
          firestore
              .collection('users')
              .doc(userRecord.id)
              .set(userRecord)
              .then(() => {
                // пишу в редюсер
                dispatch(setUserAction(userRecord))
              })
        })
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

export default Auth;
