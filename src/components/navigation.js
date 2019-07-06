import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <div className={styles.logo}>
      <Link to="/">David Basalla [dev| 3D]</Link>
    </div>

    <ul className={styles.navigationList}>
      <li className={styles.navigationItem}>
        <Link to="/code/">Code</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/movies/">Movies</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>

      <li className={styles.navigationItem}>
        <Link to="/about-me/">About me</Link>
      </li>
    </ul>
  </nav>
)
