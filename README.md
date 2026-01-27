# Yvonne D'Aquino – Professional Pickleball Website

This project is a personal website built with React to showcase Yvonne D'Aquino’s professional pickleball career, including her background, brand partnerships, tournament results, and contact information. The site is designed to be clean, responsive, and easy to navigate, serving both fans and potential sponsors or partners.

## Tech Stack

* React (with functional components & hooks)  
* React Router DOM
* JavaScript (ES6)
* HTML / CSS

## Project Structure

```text
src/
├── components/
│   ├── brands.jsx           # Brand partnerships section
│   ├── Brands.css           # Styles for brand components
│   ├── tournaments.jsx      # Tournament results page
│   ├── TournamentCard.css   # Styles for individual tournament cards
│   └── scroll.jsx           # Scroll-to-section handling
├── pages/
│   └── home.jsx             # Landing page (About, Partnerships, Contact)
├── fonts/                   # Custom fonts (optional)
├── App.jsx                  # Routing and navigation
├── App.css                  # App-level styles
├── index.css                # Global styles
├── main.jsx                 # React entry point
```

## Routes

The app uses React Router to manage navigation:  

* `/` – Home
* `/tournaments` – Tournament Results

Navigation links allow users to either:  
  
* Route to a new page (Tournament Results), or
* Smooth-scroll to specific sections on the Home page (About, Brand Partnerships, Contact).

The Scroll component ensures that hash-based navigation (e.g. /#intro) scrolls correctly when navigating between routes.

## Running Locally

```bash
npm install
npm run dev
```

## Purpose

This project serves as a clean, professional online presence for an athlete, coaches, fans, and potential brand partners.
