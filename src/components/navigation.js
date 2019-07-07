import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <div className={styles.logo}>
      <Link to="/">David Basalla</Link>
    </div>

    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <Link
          className={styles.link}
          to={'/code/'}
          activeClassName={styles.activeLink}
        >
          Code
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link
          className={styles.link}
          to={'/movies/'}
          activeClassName={styles.activeLink}
        >
          VFX
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link
          className={styles.link}
          to={'/blog/'}
          activeClassName={styles.activeLink}
        >
          Blog
        </Link>
      </li>

      <li className={styles.navigationItem}>
        <Link
          className={styles.link}
          to={'/about-me/'}
          activeClassName={styles.activeLink}
        >
          About
        </Link>
      </li>
    </ul>
  </nav>
)
