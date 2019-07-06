import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styles from './movies.module.css'
import Layout from '../components/layout'

import favicon from '../../static/favicon.ico'

class MovieIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const movies = get(this, 'props.data.allContentfulMovie.edges')

    return (
      <Layout location={this.props.location}>
        <div className="mainWrapper">
          <Helmet
            title={siteTitle}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: `${favicon}`,
              },
            ]}
          />
          <div className="wrapper">
            <div className={styles.description}>
              <h2>Movies</h2>
              <p>
                I worked on a number of movies in my career in the VFX industry
                between 2004 and 2014 in London, Wellington and San Francisco!
                Click on each movie to see more details.
              </p>
            </div>
            <ul className={styles.tilesList}>
              {movies.map(({ node }) => {
                return (
                  <li key={node.id} className={styles.gridItem}>
                    <Link to={`/movies/${node.id}`}>
                      <div className={styles.titleOverlay}>{node.title}</div>
                      <div className={styles.movieTile}>
                        <Img fluid={node.heroImage.fluid} />
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MovieIndex

export const pageQuery = graphql`
  query MovieIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulMovie(sort: { fields: startYear, order: DESC }) {
      edges {
        node {
          id
          title
          heroImage {
            id
            fluid(maxHeight: 600, maxWidth: 400) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
