import { useState } from 'react'
import viteLogo from './assets/logo-adapei72-2x.webp'
import './App.css'
import GlitchTitle from './GlitchTitle'

function App() {
  const [isTop, setIsTop] = useState(0)


  return (
    <>
      <section id="center">
        <div className={isTop ? "hero top" : "hero"}>
          <img src={viteLogo} className="base" alt="" />
          <GlitchTitle text="Mot de passe"/>
        </div>
        <div>
          
        </div>
        <button
          type="button"
          className={isTop ? "start-btn top" : "start-btn"}
          onClick={() => isTop ? setIsTop(false) : setIsTop(true)}
        >
          {isTop ? "Retour" : "Nouvelle partie"}
        </button>
      </section>
    </>
  )
}

export default App
