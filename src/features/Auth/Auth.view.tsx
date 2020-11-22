import React, { useCallback, useReducer } from 'react'
import { createUserRecord } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Logo } from '../../components/Logo'
import Button from '@material-ui/core/Button'
import { googleAuth } from '../../firebase'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(() => {
    createUserRecord(googleAuth, dispatch)
        .then(what => console.log('what',what))
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
