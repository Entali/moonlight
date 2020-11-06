import React from 'react'
import { Logo } from './components/Logo'
import { googleAuth } from './firebase'
import './App.css'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo/>
          <button onClick={googleAuth}>enter</button>
        </header>
      </div>
  );
}

export default App
