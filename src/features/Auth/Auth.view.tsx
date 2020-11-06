import React, { useReducer } from 'react'
import { setAuthAction, setUserAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Button } from 'primereact/button'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
  const {isLogged} = state;
  const onClick = () => {
    googleAuth()
        .then((user) => dispatch(setUserAction(user)))
        .then(() => dispatch(setAuthAction()))
  }

  return (
      <section className="Auth">
        <Logo/>
        <Button
            onClick={onClick}
            className="p-button-outlined p-button-danger"
        >
          observe
        </Button>
      </section>
  );
};

export default Auth;
