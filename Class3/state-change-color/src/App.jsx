import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/counter/Counter'
import BoxForm from './components/list-box/BoxForm'

function App() {

  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <BoxForm/>
    </div>
  )
}

export default App
