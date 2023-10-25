import {
  SiReact,
  SiReactrouter,
  SiPython,
  SiFlask,
  SiGooglemaps,
  SiTailwindcss,
  SiHeroku,
  SiMongodb,
  SiGithub,
  SiNetlify,
  SiChakraui,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si'
import type { WritingTypeProps } from './types';
interface Feature {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  url: string;
  description: string;
  features: Feature[];
}

export const writings: WritingTypeProps[] = [
  {
    id: '1',
    alias: 'easy',
    body: ['the static of the earth, ', 'attracts the magnet of a mind. ', 'the fabric of the earth, ', 'informs the senses, ', 'of the lines. ', 'the will inside the earth, ', 'humbles each and every heir, ', 'the brilliance of the earth, ', 'arrives acutely, ', 'and can tear. ', 'the contents of the earth, ', 'include the nows that all have passed. ', 'the shadows on the earth, ', 'hide the light, ', 'that can\'t be grasped. ', 'the folks on top of earth, ', 'looking elsewhere for their souls, ', 'miss the part of earth, ', 'that harbors heaven and its holes.']
  },
  {
    id: '2',
    alias: 'preference',
    body: ['from the earliest nudge of dawn, ', 'to the cathartic drawl of noon, ', 'the primary precious and pregnant portion of the day, ', 'is therapeutic at least, ', 'and often appears drenched, ', 'in the excitement of possibility, ', 'the time of day designated, ', 'for solitude reflection and thankful, ', 'for silence leisure and breakfast, ', 'is best enjoyed with open windows, ', 'and accompanied by music, ', 'occasionally shared with, ', 'dearest friends and sleepy lovers, ', 'cultivate reverence for, ', 'the introduction of today, ', 'and today will show you, ', 'the most profound and primordial, ', 'respect and encouragement, ', 'you will ever know.']
  },
  {
    id: '3',
    alias: 'between',
    body: ['i can hear some wind, ', 'feel the trees against the sun. ', 'in the breeze hear spirits breathe. ', 'the world weaved in gravity. ', 'maybe many can not taste, ', 'where you fill up to your face. ', 'see threaded thoughts, ', 'sewn into clouds, ', 'will soon reveal, ', 'and sooner shroud. ', 'where even knowing, ', 'becomes confusing, ', 'and soon enough, ', 'becomes amusing, ', 'pinch your skin, ', 'and i will budge. ', 'we are between, ', 'a grin and nudge.']
  },
  {
    id: '4',
    alias: 'waterweight',
    body: ['a tiny earthen crease, ', 'irrigation and release, ', 'precious drip, ', 'a little leak, ', 'walking water, ', 'wears all weak. ', 'a gymnast in a gentle stream, ', 'soon to swallow everything.']
  },
  {
    id: '5',
    alias: 'planet',
    body: ['almost all water, ', 'and within every dew drop, ', 'birds punctuate the days.']
  }
];

export const projects = [
  {
    title: 'Pantry Pal',
    description: `Pantry Pal is a mobile responsive web-application
                  that locates food pantries anywhere in the US. It
                  uses the Google Maps API for mapping functionality,
                  the Geolocation API for determining user location, and
                  the GeoCoding API for converting addresses into geographic
                  coordinates.  It was built with React and Python, and
                  uses MongoDB for data storage.`,
    url: 'https://pantry-pal-colab.herokuapp.com/'
  },
  {
    title: 'TallyHo',
    description: `Tally-Ho is a mobile responsive web-application
                  that allows users to create lists of their favorite
                  trips! Built with React and styled using Chakra UI, it
                  integrates Google Waypoints and the JavaScript Maps
                  API. The application includes authentiction so Users
                  can save their trips.`,
    url: 'https://tally-ho-road-trips.netlify.app/auth/sign-in'
  },
  {
    title: 'Collabo',
    description: `Collabo is an innovative remote-collaboration
                  platform built as a solution to enable musicians
                  to play music together remotely. The project was
                  built with vanilla JavaScript, HTML and CSS, and
                  harnesses the power of the Web Audio API.`,
    url: 'https://collabomusic.co/'
  },
  {
    title: 'Buddystock',
    description: `Buddystock VIII is a mobile-responsive website for
                  an annual, non-profit, music festival held in Mosier,
                  Oregon. It was built with Create React App, and
                  was the source of information for the eighth annual
                  show for all attendees and volunteers running logistics.
                  The project was deployed using cPanel and HostGator.`,
    url: 'https://buddystockviii.com'
  }
];

  export const photos = [
    {
      id: 1,
      url: '/img/antiquescape-min.png',
      caption: 'Antique store, Leucadia, California '
    },
    {
      id: 2,
      url: '/img/bridgescape-min.png',
      caption: 'Steel Bridge, Portland, Oregon'
    },
    {
      id: 3,
      url: '/img/crystalscape-min.png',
      caption: 'Portugese crystal hangs in the sunlight.'
    },
    {
      id: 4,
      url: '/img/landscape-min.png',
      caption: 'Image of landscape. Cascade Locks, Columbia River Gorge'
    },
    {
      id: 5,
      url: '/img/oregonscape-min.png',
      caption: 'Bridge, Siuslaw River, Florence, Oregon'
    },
  ]
