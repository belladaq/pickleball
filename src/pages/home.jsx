import Brands from '../components/brands'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import '../App.css'

function Home() {
  return (
    <>
      <div className='main'>
        <section className='intro' id='intro'>
          <h2>About</h2>
          <p> 
            Yvonne D'Aquino is a professional pickleball player and coach with over 13 years of experience coaching both tennis and pickleball. 
            She originally trained as a volleyball player and attended the World Volleyball Training Center where Olympic medal coaches helped get her on a Division 1 team at University of Connecticut.
          </p>
          <p> 
            A nationally ranked athlete, Yvonne was drafted to the 2024 Boca Raton Picklers team and competed in the National Pickleball League, where her team went on to win the championship.
          </p>
          <p>
            She coaches at multiple locations, including <a href='https://picklespot.club/'>The Pickle Spot</a>, <a href='https://app.courtreserve.com/Online/Reservations/Bookings/9334?sId=15022'>Pickleball America</a>, and <a href='https://adults.wiltoncontinuinged.org/courseCatalog/instructorView.asp?InstructorID=529&ScheduleID=9774'>Wilton Continuing Education</a>, working with players of all ages and skill levels.
            In addition to private and group lessons, Yvonne also leads corporate events. She has partnerships with several brands and can be seen modeling on the <a href="https://www.courtgirl.com">CourtGirl website</a>.
          </p>
        </section>
      </div>

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

    <section className='data' id="data">
      <Brands></Brands>        
    </section>

    <div className='main' id='contact'>
        <section className='contact'>
        <h2>Contact Information</h2>
        <p>Feel free to reach out over text or Instagram DM for information about lessons or corporate events!</p>
        <p>Phone Number: 203-858-7279</p>
        <p>
            Instagram: 
            <a href="https://www.instagram.com/ydaquino/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ marginLeft: "8px", color: "#E1306C", verticalAlign: "middle" }} />
            </a>
        </p>
        <p>
            Facebook: 
            <a href="https://www.facebook.com/yvonne.daquino" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ marginLeft: "8px", color: "#1877F2", verticalAlign: "middle" }} />
            </a>
        </p>      
        </section>
      </div>

    </>
  )
}

export default Home;
