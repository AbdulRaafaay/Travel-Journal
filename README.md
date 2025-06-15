# Travel Journal

A React-based travel journal application that showcases various travel destinations with their details and locations.

## Features

- Display multiple travel destinations
- Image showcase for each location
- Detailed information including dates and descriptions

## Technologies Used

- React 19.0.0
- Vite 6.2.0
- ESLint for code quality


## Setup and Installation

1. Clone the repository
2. Install dependencies:
npm install
npm run dev

## Available Scripts
- npm run dev - Starts the development server
- npm run build - Builds the app for production
- npm run lint - Runs ESLint for code quality checks
- npm run preview - Previews the production build locally
## Data Structure
Each travel entry contains:

- Location title and country
- Image with alt text
- Travel dates
- Description of the location

## Development
The project is built with Vite and React, following a component-based architecture. The main components are:

- Header : Displays the application title and globe icon
- MainContent : Renders individual travel entries with their details

Data is stored in data.js and mapped to components in main.jsx