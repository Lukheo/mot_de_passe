import { useState } from 'react'
import viteLogo from './assets/logo-adapei72-2x.webp'
import './App.css'

function App() {
  const [isTop, setIsTop] = useState(0)

  return (
    <>
      <section id="center">
        <div className={isTop ? "hero top" : "hero"}>
          <img src={viteLogo} className="base" alt="" />
        </div>
        <div>
          <h1>Mot de passe</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setIsTop(true)}
        >
          Nouvelle partie
        </button>
      </section>
    </>
  )
}

export default App
