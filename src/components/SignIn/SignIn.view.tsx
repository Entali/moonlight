import React from 'react'
import {signInWithGoogle} from "../../firebase"
import Button from "@material-ui/core/Button"

const SignInView = () => {
  return (
      <Button variant="contained" color="secondary" onClick={signInWithGoogle}>
        Google
      </Button>
  );
};

export default SignInView
