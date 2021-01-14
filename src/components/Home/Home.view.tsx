import React from 'react'
import {Auth} from '../../features/Auth'
import {UserModel} from '../../App'

type Props = {
  currentUser: UserModel
}

const HomeView = ({ currentUser}: Props) => {
  return (
      <div className="Home"
           style={{
             margin: '20px',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center'
           }}>
        {!currentUser ? <Auth/> : <p>Welcome, {currentUser.name}</p>}
      </div>
  )
}

export default HomeView
