import Link from 'next/link'
import {
  PiLinkedinLogo,
  PiGithubLogo,
  PiSpotifyLogo,
} from 'react-icons/pi';
import styles from '../styles.module.css'

export default function SocialIconLinks() {
  return (
    <ul className="max-w-sm sm:w-40 md:w-48 lg:w-60 flex justify-between items-baseline">
      <li>
        <Link href="https://linkedin.com/in/adamrayrobson" className={styles.linkedwrap}>
          <PiLinkedinLogo
            size={48}
            className={styles.linked}
          />
        </Link>
      </li>
      <li>
        <Link href="https://github.com/Adam-Robson" className={styles.githubwrap}>
          <PiGithubLogo
            size={48}
            className={styles.github}
          />
        </Link>
      </li>
      <li>
        <Link href="https://spoti.fi/3QNqMuE" className={styles.spotwrap}>
          <PiSpotifyLogo
            size={48}
            className={styles.spot}
          />
        </Link>
      </li>
    </ul>
  )
}
