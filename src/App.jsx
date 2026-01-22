import { useState } from 'react'
import './App.css'
import Tournament from './components/tournaments'
import Brands from './components/brands'

function App() {

  return (
    <>
      <header className='site-header'>
        <div className='header-content'>
          <h1>Yvonne D'Aquino</h1>               
        </div>
   
      </header>

      <div className='navigation'>
        <nav>
          <ul>
            <li>About Me</li>
            <li>Tournament Results</li>
            <li>Partnerships</li>
            <li>Get in Touch</li>
          </ul>
        </nav>
      </div>

      <div className='main'>
        <section className='intro'>
          <h3>About Me</h3>
          <p>Yvonne D'Aquino is a professional pickleball player and coach based in Connecticut.</p>
        </section>
      </div>

      <div className='data'>
        <Tournament></Tournament>
        <Brands></Brands>
      </div>

      <div className='Contact'>
        <h3>Contact Information</h3>
      </div>
    </>
  )
}

export default App
