import React, { useCallback, useReducer } from 'react'
import { authAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Logo } from '../../components/Logo'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { googleAuth } from '../../firebase'
import moment from 'moment'

type BtnProps = {
  error: boolean,
  text: string,
  onClick: () => void
}

const Btn = (props: BtnProps) => {
  const { error, text, onClick } = props
    return (
        <Button
            style={{
              margin: '10px'
            }}
            onClick={onClick}
            disabled={error && true}
            variant="contained" color="default" size="large"
        >
          {text}
        </Button>
    )
}

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(() => {
    authAction(googleAuth, dispatch).then(user => {
      console.log(
          'user', user,
          // moment(user?.created).format('MMMM Do YYYY, h:mm:ss a')
      )
    })
  }, [])

  return (
      <section className="Auth">
        <Logo/>
        <ButtonGroup orientation="vertical">
          <Btn text="google" error={state.error} onClick={onClick}/>
          <Btn text="email" error={state.error} onClick={onClick}/>
        </ButtonGroup>
      </section>
  );
};

export default Auth
