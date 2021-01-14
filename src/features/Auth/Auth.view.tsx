import React from 'react'
import Button from '@material-ui/core/Button'
import {signInWithGoogle} from '../../firebase'

const AuthView = () => {
  return (
      <div style={{
        width: '60%',
        display: 'flex',
        justifyContent: 'space-evenly'
      }}>
        <Button variant="contained" color="primary" onClick={() => null}>
          Email
        </Button>
        <Button variant="contained" color="secondary" onClick={signInWithGoogle}>
          Google
        </Button>
      </div>
  )
}

export default AuthView
