import React, { useEffect, useReducer } from 'react'
import { setUserAction } from './Auth.actions'
import { INITIAL_STATE, authReducer } from './Auth.reducer'
import { Button } from 'primereact/button'
import { Logo } from '../../components/Logo'
import { googleAuth } from '../../firebase'
// @ts-ignore
import SunCalc from 'suncalc'

const Auth = () => {
  const [dispatch] = useReducer(authReducer, INITIAL_STATE);
  const onClick = () => {
    googleAuth().then((user) => dispatch(setUserAction(user)))
  }

  useEffect(() => {
    console.log('Moon Position', SunCalc.getMoonPosition(
        new Date(),
        50.450100,
        30.523399
    ))

    console.log('Moon Illumination', SunCalc.getMoonIllumination(new Date()))
  })

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
