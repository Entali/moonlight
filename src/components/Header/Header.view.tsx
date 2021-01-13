import React from 'react'
import Button from '@material-ui/core/Button'
import {CurrentUserModel} from '../../App'

type Props = {
  logout: () => void,
  currentUser: CurrentUserModel
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
