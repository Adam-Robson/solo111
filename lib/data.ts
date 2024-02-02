import type { ImageGalleryProps, ProjectType, WritingType } from './types'

export const projects: ProjectType[] = [

  {
    id: 1,
    title: "Collabo",
    description: `"Collabo" is an innovative and collaborative open-source song project platform that enables musicians to remotely create music together.`,
    githubLink: "https://github.com/Collabo-Team/collabo",
    liveLink: "https://collabomusic.co/"
  }, {
    id: 2,
    title: "Pantry Pal",
    description: `"Pantry Pal" is a mobile responsive web-application that locates food pantries anywhere in the U.S.`,
    githubLink: "https://github.com/Adam-Robson/colab19-6",
    liveLink: "https://pantry-pal-colab.herokuapp.com/"
  },
  {
    id: 3,
    title: "Tally Ho",
    description: `"Tallyho" is a responsive web application that provides users with a comprehensive platform allowing users to log in and enjoy a personalized road trip planning experience.`,
    githubLink: "https://github.com/road-trippin/tally-ho",
    liveLink: "https://tally-ho-road-trips.netlify.app/auth/sign-in"
  },
  {
    id: 5,
    title: "Playground",
    description: `"Playground" is a collection of many of the games that I have built since I began as a software developer. `,
    githubLink: "https://github.com/Adam-Robson/collection",
    liveLink: "https://playgroundcollection.netlify.app"
  }
];

export const writings: WritingType[] = [
  {
    id: 1,
    title: 'planet',
    body: 'almost all water, and within every dew drop, birds punctuate the days. every single wave, a piece of time held in space. both the present and the past - something fleeting, something vast.'
  },
  {
    id: 2,
    title: 'waterweight',
    body: 'a tiny earthen crease, irrigation and release, a precious drip, a little leak, walking water, wears all weak. a gymnast in a gentle stream, soon to swallow everything.'
  },
  {
    id: 3,
    title: 'between',
    body: 'i can hear the wind, feel the trees against the sun. in the breeze hear spirits breathe. the world weaved in gravity. maybe many can not taste, where you fill up to your face. threaded thoughts, sewn into clouds, may soon reveal, or sooner shroud. where even knowing, becomes confusing, soon enough, becomes amusing, pinch your skin, and i will budge. we\'re in-between, a grin and nudge.'
  },
  {
    id: 4,
    title: 'easy',
    body: 'the static of the earth attracts the magnet of a mind. the fabric of the earth, informs the senses of the lines. the will inside the earth, humbles each and every heir, the brilliance of the earth, arrives acutely, and can tear. the contents of the earth, include the nows that all have passed. the shadows on the earth, hide the light, that can\'t be grasped. the folks on top of earth, looking elsewhere for their souls, miss the part of earth, that harbors heaven and its holes.'
  }

];

export const photos = [
  {
    id: 1,
    src: '/images/rainbow.jpg',
    alt: 'hwy 84 oregon'
  },
  {
    id: 2,
    src: '/images/fla.jpg',
    alt: 'florida bar portland'
  },
  {
    id: 3,
    src: '/images/ripples.jpg',
    alt: 'are we the ripples we make?'
  },
  {
    id: 4,
    src: '/images/tree.jpg',
    alt: 'tree passing'
  },
  {
    id: 5,
    src: '/images/cat.jpg',
    alt: 'cat magazine'
  }
]
