import React from 'react'
import { Link } from 'gatsby'
import HamburgerMenu from 'react-hamburger-menu'
import styles from './navigation.module.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showButtonClicked: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ showButtonClicked: !this.state.showButtonClicked })
  }

  render() {
    return (
      <div>
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

          <div className={styles.hamburgerContainer}>
            <HamburgerMenu
              isOpen={this.state.showButtonClicked}
              menuClicked={this.handleClick}
              width={40}
              height={20}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </nav>

        <ul
          className={`${styles.navigationListMobile} ${this.state
            .showButtonClicked && styles.showMobileNavBar}`}
        >
          <li className={styles.navigationItemMobile}>
            <Link
              className={styles.link}
              to={'/code/'}
              activeClassName={styles.activeLink}
            >
              Code
            </Link>
          </li>

          <li className={styles.navigationItemMobile}>
            <Link
              className={styles.link}
              to={'/movies/'}
              activeClassName={styles.activeLink}
            >
              VFX
            </Link>
          </li>

          <li className={styles.navigationItemMobile}>
            <Link
              className={styles.link}
              to={'/blog/'}
              activeClassName={styles.activeLink}
            >
              Blog
            </Link>
          </li>
          <li className={`${styles.navigationItemMobile}`}>
            <Link
              className={styles.link}
              to={'/about-me/'}
              activeClassName={styles.activeLink}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navigation
