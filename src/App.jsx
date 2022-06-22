import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste Header</h1>
        <p>Testando se o deploy esta ok</p>
      </header>
    </div>
  )
}

export default App
