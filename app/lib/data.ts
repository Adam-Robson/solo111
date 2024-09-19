import { Me, NavigationLink, Project } from './types';

export const meimage: string = '/images/adaam.png';

export const mes: Me[] = [
  'I love to create.',
  'I am a full-stack software engineer.',
  'I live in the pacific northwest.',
  'I am neurodivergent.',
  'I am an artist.',
  'I love Nodejs.',
  'I have two dogs and a cat.',
  'The cat thinks they are a dog.',
  'I write, record, and produce all of my own music.',
  'I am excited about AI.'
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Collabo',
    description: `"Collabo" is an innovative and collaborative open-source song project platform that enables musicians to remotely create music together.`,
    icon: 'collabo',
    url: 'https://collabomusic.co/',
    github: 'https://github.com/Collabo-Team/collabo'
  },
  {
    id: 2,
    title: 'Pantry Pal',
    description: `"Pantry Pal" is a mobile responsive web-application that locates food pantries anywhere in the U.S.`,
    icon: 'pal',
    url: 'https://pantry-pal-colab.herokuapp.com/',
    github: 'https://github.com/Adam-Robson/colab19-6'
  },
  {
    id: 3,
    title: 'Tally Ho',
    description: `"Tallyho" is a responsive web application that provides users with a comprehensive platform allowing users to log in and enjoy a personalized road trip planning experience.`,
    icon: 'tallyho',
    url: 'https://tally-ho-road-trips.netlify.app/',
    github: 'https://github.com/road-trippin/tally-ho'
  },
  {
    id: 4,
    title: 'Ellington',
    description: `"Ellington Willoughby" is a local band in in the Pacific Northwest. The website provides the band with a platform, that allows their fans to both enjoy the music and stay up to date with the latest information.`,
    icon: 'ellington',
    url: 'https://ellington-willoughby.vercel.app/',
    github: 'https://github.com/EllingtonWilloughby/ellingtonwilloughby'
  }
];

export const navigationLinks: NavigationLink[] = [
  { name: 'home', path: '/', title: 'return to the home page' },
  { name: 'about', path: '/about', title: 'learn more about me' },
  { name: 'projects', path: '/projects', title: 'view my projects' },
  { name: 'contact', path: '/contact', title: 'get in touch' },
  { name: 'more', path: '/more', title: 'more projects' }
];
