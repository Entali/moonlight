import React, { useReducer } from 'react'
import { setUserAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Button } from 'primereact/button'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'

const Auth = () => {
  const [dispatch] = useReducer(authReducer, INITIAL_STATE);
  const onClick = () => {
    googleAuth().then((user) => dispatch(setUserAction(user)))
  }

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
