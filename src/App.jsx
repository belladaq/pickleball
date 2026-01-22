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
            <li><a href='#intro'>About</a></li>
            <li><a href="#data">Tournament Results</a></li>
            <li><a href="#data">Partnerships</a></li>
            <li><a href="#contact">Get in Touch</a></li>
          </ul>
        </nav>
      </div>

      <div className='main'>
        <section className='intro' id='intro'>
          <h2>About</h2>
          <p>Yvonne D'Aquino is a professional pickleball player and coach based in Connecticut.</p>
          <p>She is nationally ranked and competed in the National Pickleball League for the Boca Raton Picklers in 2024.</p>
          <p>She began her career as a tennis coach in 2011 and transitioned to pickleball in 2020.</p>
          <p>Yvonne has a number of partnerships you can find her modeling on the <a href='https://www.courtgirl.com'>CourtGirl Website</a>.</p>
          <p>Yvonne coaches at all levels and all ages. In addition to private and group lessons, she also does corporate events.</p>
        </section>

        <section className="gallery">
          <img src="/images/gallery10.png" alt="On court" />
          <img src="/images/gallery1.png" alt="Pickleball action shot" />
          <img src="/images/gallery3.png" alt="Nationals podium" />
          <img src="/images/gallery11.png" alt="On court" />
          <img src="/images/gallery12.png" alt="USOpen" ></img>
          <img src="/images/gallery9.png" alt="Podium solo"></img>
          <img src="/images/gallery6.png" alt="Match moment" />          
          <img src="/images/gallery5.png" alt="Medals" />
          <img src="/images/gallery7.png" alt="Podium solo"></img>
          <img src="/images/gallery8.png" alt="Solo"></img>
          <img src="/images/gallery2.png" alt="Courtgirl photoshoot" />
         <img src="/images/gallery4.png" alt="Action shot" />

        </section>

      </div>

      <div className='contact' id='contact'>
        <h2>Contact Information</h2>
        <p>Feel free to reach out over text or Instagram DM for information about lessons or corporate events!</p>
        <p>Phone Number: 203-858-7279</p>
        <p>Instagram: <a href='https://www.instagram.com/ydaquino/'>@ydaquino</a></p>
      </div>

      <div className='data' id='data'>
        <Brands></Brands>        
        <Tournament></Tournament>
      </div>

    </>
  )
}

export default App
