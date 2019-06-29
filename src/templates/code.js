import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from './movie.module.css'

class MovieTemplate extends React.Component {
  render() {
    const movie = get(this.props, 'data.contentfulMovie')
    const duration = movie.endYear
      ? `${movie.startYear} - ${movie.endYear}`
      : movie.startYear

    console.log(movie)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2>{`${movie.title} (${duration})`}</h2>

            <div className={styles.movieContent}>
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

                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: movie.description.description,
                    }}
                  />
                </p>
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
  query WorkProjectById($id: String!) {
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
