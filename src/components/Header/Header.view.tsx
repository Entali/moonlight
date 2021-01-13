import React from 'react'
import Button from '@material-ui/core/Button'
import {UserModel} from '../../App'

type Props = {
  logout: () => void,
  currentUser: UserModel
}

const HeaderView = ({ logout, currentUser }: Props) => {
  return (
      <header style={{
        height: '70px',
        padding: '10px',
        textAlign: 'right'
      }}>
        {currentUser && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <p>{currentUser.email}</p>
            <Button onClick={logout}>
              exit
            </Button>
          </div>
        )}
      </header>
  )
}

export default HeaderView
