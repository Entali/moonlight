import React from 'react'
import Button from "@material-ui/core/Button"

const HeaderView = ({logout, currentUser}: any) => {
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
