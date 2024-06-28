import { NavigationLinks } from './types';


export const mes = [
  'I love to create.',
  'I do not take things too seriously.',
  'I am a full-stack software engineer.',
  'I live in the pacific northwest.',
  'I am neurodivergent.',
  'I associate with no political party.',
  'I am an artist.',
  'I am learning Rust.',
  'I am fluent in Typescript & JavaScript & Nodejs.',
  'I am Le Fog.',
  'I have two dogs and a cat.',
  'The cat thinks they are a dog.',
  'I write, record, and produce all of my own music.',
  'I build web applications in React.',
  'I am not afraid of AI.',
  'I am a highly sensitive person.'
];

export const meimages = [
  '/images/adaam.png',
  '/images/adam.png',
  '/images/adm.png',
  '/images/am.png',
];

export const navigationLinks: NavigationLinks = {
    '/': ['about', 'contact', 'more'],
    '/about': ['home', 'contact', 'more'],
    '/contact': ['home', 'about', 'more'],
    '/more': ['home', 'about', 'contact'],
  };
