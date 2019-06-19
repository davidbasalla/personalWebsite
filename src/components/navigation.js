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
        <Link to="/blog/">CODE</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/">MOVIES</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/">BLOG</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/">ABOUT ME</Link>
      </li>
    </ul>
  </nav>
)
