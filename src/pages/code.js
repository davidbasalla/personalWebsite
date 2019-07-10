import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styles from './code.module.css'
import Layout from '../components/layout'

import favicon from '../../static/favicon.ico'

class WorkIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const workProjects = get(this, 'props.data.allContentfulWork.edges')

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
              <h1>Professional</h1>
              <p>
                I've worked on multiple projects at{' '}
                <a href="https://red-badger.com">Red Badger</a> and{' '}
                <a href="https://unboxed.co">Unboxed</a> - both London-based
                digital consultancies - across projects in government, banking
                and ecommerce. I also worked as a civil servant for the British{' '}
                <a href="https://www.gov.uk/government/organisations/government-digital-service">
                  Government Digital Service
                </a>{' '}
                on the <a href="https://www.gov.uk/">GOV.UK</a> website. Click
                on each tile below to see more information about each project.
              </p>
            </div>
            <ul className={styles.tilesList}>
              {workProjects
                .filter(({ node }) => node.type === 'professional')
                .map(({ node }) => {
                  return (
                    <li key={node.id} className={styles.gridItem}>
                      <Link to={`/code/${node.id}`}>
                        <div className={styles.tileOverlay}>{node.title}</div>
                        <div className={styles.tile}>
                          <Img fluid={node.heroImage.fluid} />
                        </div>
                      </Link>
                    </li>
                  )
                })}
            </ul>

            <div className={styles.description}>
              <h1>Other</h1>
              <p>
                Click on each tile to see more information about the projects
                that I worked on.
              </p>
            </div>
            <ul className={styles.tilesList}>
              {workProjects
                .filter(({ node }) => node.type === 'other')
                .map(({ node }) => {
                  return (
                    <li key={node.id} className={styles.gridItem}>
                      <Link to={`/code/${node.id}`}>
                        <div className={styles.tileOverlay}>{node.title}</div>
                        <div className={styles.tile}>
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

export default WorkIndex

export const pageQuery = graphql`
  query MovieWorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulWork(sort: { fields: year, order: DESC }) {
      edges {
        node {
          id
          title
          type
          heroImage {
            id
            fluid(maxHeight: 100, maxWidth: 300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
