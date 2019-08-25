import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import styles from './code.module.css'

import favicon from '../../static/favicon.ico'

class CodeTemplate extends React.Component {
  render() {
    const work = get(this.props, 'data.contentfulWork')
    const company = work.company

    return (
      <Layout location={this.props.location}>
        <div className="mainWrapper">
          <Helmet
            title={work.title}
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
              <h2>{`${work.title}`}</h2>
            </div>

            <div className={styles.content}>
              <div className={styles.imageContainer}>
                <Img
                  className={styles.gatsbyImage}
                  fluid={work.largeImage.fluid}
                />
              </div>
              <div className={styles.textContainer}>
                {company && (
                  <div className={styles.companies}>
                    <a href={company.url} target="_blank">
                      {company.name}
                    </a>
                    <span>
                      {' '}
                      - {company.city}, {company.country}
                    </span>
                    <br />
                  </div>
                )}

                <div className={styles.markdown}>
                  <ReactMarkdown source={work.description.description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CodeTemplate

export const pageQuery = graphql`
  query WorkProjectById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulWork(id: { eq: $id }) {
      title
      description {
        description
      }
      year
      company {
        name
        city
        country
        url
      }
      largeImage {
        id
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
