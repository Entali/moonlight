import React from 'react'
import Button from '@material-ui/core/Button'
import {UserModel} from '../../App'

type Props = {
  logout: () => void,
  currentUser: UserModel
}

const HeaderView = ({logout, currentUser}: Props) => {
  return (
      <header style={{
        padding: '10px',
        textAlign: 'right'
      }}>
        {currentUser && (
          <Button onClick={logout}>
            Exit
          </Button>
        )}
      </header>
  )
}

export default HeaderView
