import React, {useReducer, useCallback} from 'react'
import {INITIAL_STATE, authReducer} from './Auth.reducer'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import {googleAuth} from '../../firebase'

type BtnProps = {
  error: boolean,
  text: string,
  onClick?: () => void
}

const Btn = (props: BtnProps) => {
  const {error, text, onClick} = props
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
  const [state] = useReducer(authReducer, INITIAL_STATE);

  const onClick = useCallback(() => {
    googleAuth().then(google => console.log('google',google))
    // authAction(googleAuth, dispatch).then(user => {
    //   console.log(
    //       'user', user,
    //       // moment(user?.created).format('MMMM Do YYYY, h:mm:ss a')
    //   )
    // })
  }, [])

  return (
      <section className="Auth">
        <ButtonGroup orientation="vertical">
          <Btn text="google" error={state.error} onClick={onClick}/>
          {/*<Btn text="email" error={state.error}/>*/}
        </ButtonGroup>
      </section>
  );
};

export default Auth
