import type { ProjectTypes } from './types'

export const projects: ProjectTypes[] = [
  {
    id: 1,
    title: "Pantry Pal",
    description: `Pantry Pal is a mobile responsive web-application that locates food pantries anywhere in the US. It uses the Google API suite for mapping, finding the user location, and for converting addresses into geographic coordinates. Built with React and Python, the project uses MongoDB for data storage and is deployed through fly.io and Heroku.`,
    githubLink: "https://github.com/Adam-Robson/colab19-6",
    liveLink: "https://pantry-pal-colab.herokuapp.com/",
  },
  {
    id: 2,
    title: "Tally Ho",
    description: `"Tallyho" is a responsive web application built with React and styled using Chakra UI. It leverages various technologies, including the Google Waypoints and JavaScript Maps API, and Supabase, an open-source Postgres Database, to provide users with a comprehensive platform for planning and organizing road trips, with the added functionality of allowing users to log in and enjoy a personalized road trip planning experience.`,
    githubLink: "https://github.com/road-trippin/tally-ho",
    liveLink: "https://tally-ho-road-trips.netlify.app/auth/sign-in",
  },
  {
    id: 3,
    title: "Collabo",
    description: `The "Open Source Song Project Platform" Collabo is an innovative collaborative platform that enables musicians from all corners of the globe to create music together. This project centers around an audio mixer that incorporates the Waveform Playlist tool by Naomi Aro. Developed with on a team of five developers during my first group project at Alchemy Code Lab, in Portland Oregon, the platform is built using Supabase, vanilla JavaScript, CSS, and HTML, and is accessible at collabomusic.co.`,
    githubLink: "https://github.com/Collabo-Team/collabo",
    liveLink: "https://collabomusic.co/",
  },
  {
    id: 4,
    title: "Buddystock",
    description: `Buddystock is an annual music festival held in Mosier, Oregon. In 2023, the festival was held from June 2nd-June 4th. This project gave me a chance to build a real world product for a client on a real-world deadline. The project effectively conveyed practical details such as event dates, venue guidelines, and camping options, and served as a central hub for providing essential information to anybody attending the festival.  A big learning aspect for this project was integrating cPanel and HostGator for deployment.`,
    githubLink: "https://github.com/Buddystock/buddy",
    liveLink: "https://www.buddystockviii.com",
  }
];
