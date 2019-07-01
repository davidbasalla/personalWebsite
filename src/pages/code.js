import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styles from './code.module.css'
import Layout from '../components/layout'

class WorkIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const workProjects = get(this, 'props.data.allContentfulWork.edges')

    console.log(workProjects)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <div className={styles.description}>
              <h2>Professional</h2>
              <p>
                Click on each tile to see more information about the projects
                that I worked on.
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
              <h2>Other</h2>
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
            fluid(maxHeight: 150, maxWidth: 300) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
