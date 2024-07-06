import { Me, NavigationLink, Project } from './types';

export const meimage: string = '/images/adaam.png';

export const mes: Me[] = [
  'I love to create.',
  'I am a full-stack software engineer.',
  'I live in the pacific northwest.',
  'I am neurodivergent.',
  'I am an artist.',
  'I am fluent in Typescript & JavaScript & Nodejs.',
  'I have two dogs and a cat.',
  'The cat thinks they are a dog.',
  'I write, record, and produce all of my own music.',
  'I build web applications in React.',
  'I am not afraid of AI.'
];

export const projects: Project[] = [
  {
    title: 'Collabo',
    description: `"Collabo" is an innovative and collaborative open-source song project platform that enables musicians to remotely create music together.`,
    githubLink: 'https://github.com/Collabo-Team/collabo',
    liveLink: 'https://collabomusic.co/'
  },
  {
    title: 'Pantry Pal',
    description: `"Pantry Pal" is a mobile responsive web-application that locates food pantries anywhere in the U.S.`,
    githubLink: 'https://github.com/Adam-Robson/colab19-6',
    liveLink: 'https://pantry-pal-colab.herokuapp.com/'
  },
  {
    title: 'Tally Ho',
    description: `"Tallyho" is a responsive web application that provides users with a comprehensive platform allowing users to log in and enjoy a personalized road trip planning experience.`,
    githubLink: 'https://github.com/road-trippin/tally-ho',
    liveLink: 'https://tally-ho-road-trips.netlify.app/auth/sign-in'
  },
  {
    title: 'Playground',
    description: `"Playground" is a collection of many of the games that I have built since I began as a software developer. `,
    githubLink: 'https://github.com/Adam-Robson/collection',
    liveLink: 'https://playgroundcollection.netlify.app'
  }
];

export const navigationLinks: NavigationLink[] = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
  { name: 'more', path: '/more' }
];
