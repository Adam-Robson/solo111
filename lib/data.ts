import type { ProjectType } from './types';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Collabo',
    description: `"Collabo" is an innovative and collaborative open-source song project platform that enables musicians to remotely create music together.`,
    githubLink: 'https://github.com/Collabo-Team/collabo',
    liveLink: 'https://collabomusic.co/'
  },
  {
    id: 2,
    title: 'Pantry Pal',
    description: `"Pantry Pal" is a mobile responsive web-application that locates food pantries anywhere in the U.S.`,
    githubLink: 'https://github.com/Adam-Robson/colab19-6',
    liveLink: 'https://pantry-pal-colab.herokuapp.com/'
  },
  {
    id: 3,
    title: 'Tally Ho',
    description: `"Tallyho" is a responsive web application that provides users with a comprehensive platform allowing users to log in and enjoy a personalized road trip planning experience.`,
    githubLink: 'https://github.com/road-trippin/tally-ho',
    liveLink: 'https://tally-ho-road-trips.netlify.app/auth/sign-in'
  },
  {
    id: 5,
    title: 'Playground',
    description: `"Playground" is a collection of many of the games that I have built since I began as a software developer. `,
    githubLink: 'https://github.com/Adam-Robson/collection',
    liveLink: 'https://playgroundcollection.netlify.app'
  }
];

export const navigationLinks = [
  { id: 0, href: '/', label: 'home' },
  { id: 1, href: '/bio', label: 'bio' },
  { id: 2, href: '/resume', label: 'resume' },
  { id: 3, href: '/projects', label: 'projects' },
  { id: 4, href: '/music', label: 'music' },
  { id: 5, href: '/contact', label: 'contact' }
];
