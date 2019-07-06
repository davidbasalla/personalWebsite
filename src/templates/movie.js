import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import styles from './movie.module.css'

import favicon from '../../static/favicon.ico'
import imdb from '../../assets/images/imdb.jpg'
class MovieTemplate extends React.Component {
  render() {
    const movie = get(this.props, 'data.contentfulMovie')
    const duration = movie.endYear
      ? `${movie.startYear} - ${movie.endYear}`
      : movie.startYear

    return (
      <Layout location={this.props.location}>
        <div className="mainWrapper">
          <Helmet
            title={movie.title}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: `${favicon}`,
              },
            ]}
          />
          <div className="wrapper">
            <div className={styles.header}>
              <h2>{`${movie.title} (${duration})`}</h2>

              {movie.imdbLink && (
                <div className={styles.imdbContainer}>
                  <a target="_blank" href={movie.imdbLink}>
                    <img className={styles.imdbImage} src={imdb} />
                  </a>
                </div>
              )}
            </div>

            <div className={styles.content}>
              <div className={styles.imageContainer}>
                <Img fluid={movie.heroImage.fluid} />
              </div>
              <div className={styles.textContainer}>
                {movie.company.map(company => {
                  return (
                    <div>
                      <a href={company.url} target="_blank">
                        {company.name}
                      </a>
                      <span>
                        {' '}
                        - {company.city}, {company.country}
                      </span>
                      <br />
                    </div>
                  )
                })}

                {movie.position}

                <ReactMarkdown source={movie.description.description} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MovieTemplate

export const pageQuery = graphql`
  query MovieById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulMovie(id: { eq: $id }) {
      title
      description {
        description
      }
      imdbLink
      startYear
      endYear
      position
      company {
        name
        city
        country
        url
      }
      heroImage {
        id
        fluid(maxHeight: 600, maxWidth: 400) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
