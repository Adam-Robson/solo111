import Link from 'next/link'
import {
  PiLinkedinLogo,
  PiGithubLogo,
  PiSpotifyLogo,
} from 'react-icons/pi';
import styles from '../styles.module.css'

export default function SocialIconLinks() {
  return (
    <ul className="max-w-sm sm:w-40 md:w-48 lg:w-60 flex justify-between items-baseline py-4">
      <li>
        <Link
          href="https://linkedin.com/in/adamrayrobson"
          target="_blank"
          className={styles.linkedwrap}
        >
          <PiLinkedinLogo
            size={32}
            className={styles.linked}
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/Adam-Robson"
          target="_blank"
          className={styles.githubwrap}
        >
          <PiGithubLogo
            size={32}
            className={styles.github}
          />
        </Link>
      </li>
      <li>
        <Link
          href="https://spoti.fi/3QNqMuE"
          target="_blank"
          className={styles.spotwrap}
        >
          <PiSpotifyLogo
            size={32}
            className={styles.spot}
          />
        </Link>
      </li>
    </ul>
  )
}
