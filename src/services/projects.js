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
  SiGithubactions,
  SiNetlify,
  SiChakraui,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si';

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
    link: 'https://pantry-pal-colab.herokuapp.com/',
    features: [
      {
        name: 'react',
        icon: SiReact
      },
      {
        name: 'react-router',
        icon: SiReactrouter
      },
      {
        name: 'python',
        icon: SiPython
      },
      {
        name: 'flask',
        icon: SiFlask
      },
      {
        name: 'googlemaps',
        icon: SiGooglemaps
      },
      {
        name: 'tailwind',
        icon: SiTailwindcss
      },
      {
        name: 'mongo',
        icon: SiMongodb
      },
      {
        name: 'heroku',
        icon: SiHeroku,
      },
      {
        name: 'github',
        icon: SiGithub
      },
      {
        name: 'Github Actions',
        icon: SiGithubactions
      },
    ]
  },
  {
    title: 'TallyHo',
    description: `Tally-Ho is a mobile responsive web-application
                  that allows users to create lists of their favorite
                  trips! Built with React and styled using Chakra UI, it
                  integrates Google Waypoints and the JavaScript Maps
                  API. The application includes authentiction so Users
                  can save their trips.`,
    link: 'https://tally-ho-road-trips.netlify.app/auth/sign-in',
    features: [
      {
        name: 'react',
        icon: SiReact
      },
      {
        name: 'react-router',
        icon: SiReactrouter
      },
      {
        name: 'googlemaps',
        icon: SiGooglemaps
      },
      {
        name: 'chakra',
        icon: SiChakraui
      },
      {
        name: 'netlify',
        icon: SiNetlify
      },
      {
        name: 'github',
        icon: SiGithub
      },
      {
        name: 'Github Actions',
        icon: SiGithubactions
      },
    ]
  },
  {
    title: 'Collabo',
    description: `Collabo is an innovative remote-collaboration
                  platform built as a solution to enable musicians
                  to play music together remotely. The project was
                  built with vanilla JavaScript, HTML and CSS, and
                  harnesses the power of the Web Audio API.`,
    link: 'https://collabomusic.co/',
    features: [
      {
        name: 'javascript',
        icon: SiJavascript
      },
      {
        name: 'html',
        icon: SiHtml5
      },
      {
        name: 'css',
        icon: SiCss3
      },
      {
        name: 'netlify',
        icon: SiNetlify
      },
      {
        name: 'github',
        icon: SiGithub
      },
      {
        name: 'Github Actions',
        icon: SiGithubactions
      }

    ]
  },
  {
    title: 'Buddystock',
    description: `Buddystock VIII is a mobile-responsive website for
                  an annual, non-profit, music festival held in Mosier,
                  Oregon. It was built with Create React App, and
                  was the source of information for the eighth annual
                  show for all attendees and volunteers running logistics.
                  The project was deployed using cPanel and HostGator.`,
    link: 'https://buddystockviii.com',
    features: [
      {
        name: 'react',
        icon: SiReact
      },
      {
        name: 'react-router',
        icon: SiReactrouter
      },
      {
        name: 'netlify',
        icon: SiNetlify
      },
      {
        name: 'github',
        icon: SiGithub
      },
      {
        name: 'Github Actions',
        icon: SiGithubactions
      },

    ]
  }
];
