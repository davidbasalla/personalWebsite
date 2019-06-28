import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <div className={styles.logo}>
      <Link to="/">David Basalla [developer | 3D artist]</Link>
    </div>

    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <Link to="/code/">CODE</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/movies/">MOVIES</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/">BLOG</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/about-me/">ABOUT ME</Link>
      </li>
    </ul>
  </nav>
)
