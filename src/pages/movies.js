import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styles from './movies.module.css'
import Layout from '../components/layout'
// import MovieTile from '../components/movie-tile'

class MovieIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const movies = get(this, 'props.data.allContentfulMovie.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Movies I worked on</h2>
            <ul className={styles.tilesList}>
              {movies.map(({ node }) => {
                console.log(node)
                return (
                  <li key={node.id}>
                    <Img fluid={node.heroImage.fluid} />
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
    allContentfulMovie {
      edges {
        node {
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
