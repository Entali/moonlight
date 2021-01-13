import React from 'react'
import {SignIn} from '../SignIn'

const HomeView = () => {
  return (
      <div className="Home"
           style={{
             margin: '20px',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center'
           }}>
        <SignIn/>
      </div>
  )
}

export default HomeView
