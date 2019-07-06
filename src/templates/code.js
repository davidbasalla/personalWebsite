import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import styles from './code.module.css'

class CodeTemplate extends React.Component {
  render() {
    const work = get(this.props, 'data.contentfulWork')
    const company = work.company

    console.log(work)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <div className="wrapper">
            <h2>{`${work.title}`}</h2>

            <div className={styles.content}>
              <div className={styles.imageContainer}>
                <Img fluid={work.heroImage.fluid} />
              </div>
              <div className={styles.textContainer}>
                {company && (
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
                )}

                <ReactMarkdown source={work.description.description} />
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
      heroImage {
        id
        fluid(maxHeight: 400, maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
