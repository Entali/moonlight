import React, { useCallback, useReducer } from 'react'
import { authAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Logo } from '../../components/Logo'
import Button from '@material-ui/core/Button'
import { googleAuth } from '../../firebase'
import moment from 'moment'

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(() => {
    authAction(googleAuth, dispatch).then(user => {
      console.log(
          moment(user?.created.toDate()).format('MMMM Do YYYY, h:mm:ss a')
      )
    })
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
