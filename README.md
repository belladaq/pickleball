# Yvonne D'Aquino - Professional Pickleball Portfolio

This project is a personal website built with React to showcase Yvonne D'Aquino’s professional pickleball career, including her background, brand partnerships, tournament results, and contact information. The site is designed to be clean, responsive, and easy to navigate, serving both fans and potential sponsors or partners.

# Tech Stack

React (with functional components & hooks)  
React Router DOM for client-side routing  
HTML5/ CSS3 for layout and styling  
JavaScript  

# Project Structure

src/  
├── components/  
│ ├── brands.jsx              # Brand partnerships section  
│ ├── Brands.css              # Styles for brand components  
│ ├── tournaments.jsx         # Tournament results page  
│ ├── TournamentCard.css      # Styles for individual tournament cards  
│ └── scroll.jsx              # Scroll-to-section handling  
│  
├── pages/  
│ └── home.jsx                # Main landing page with About, Partnerships, and Contact sections  
│  
├── App.jsx                   # Root component with routing and navigation  
├── App.css                   # Global styles  
├── main.jsx                  # React entry point  

# Routing & Navigation

The app uses React Router to manage navigation:  

/ → Home Page  
/tournaments → Tournament Results Page  
  
Navigation links allow users to either:  
  
Route to a new page (Tournament Results), or  
Smooth-scroll to specific sections on the Home page (About, Brand Partnerships, Contact).  
  
The Scroll component ensures that hash-based navigation (e.g. /#intro) scrolls correctly when navigating between routes.

# Running Locally

npm install  
npm run dev

# Purpose

This project serves as a clean, professional online presence for an athlete, coaches, fans, and potential brand partners.