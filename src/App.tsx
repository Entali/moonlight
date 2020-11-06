import React from 'react'
import { signInWithGoogle } from './firebase/auth'
import { Logo } from './components/Logo'
import './App.css'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <button onClick={signInWithGoogle}>enter</button>
        </header>
      </div>
  );
}

export default App
