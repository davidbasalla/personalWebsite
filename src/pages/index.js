import React from 'react'
import ReactMarkdown from 'react-markdown'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import styles from './index.module.css'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const pages = get(this, 'props.data.allContentfulPage.edges')
    console.log(pages)
    const page = pages[0].node

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <div className={styles.intro}>
              <ReactMarkdown source={page.body.body} />
            </div>

            <h2>Latest blog posts:</h2>
            <ul className={styles.bloglist}>
              {posts.map(({ node }) => {
                return (
                  <li key={node.id} className={styles.listItem}>
                    <ArticlePreview article={node} />
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPage(filter: { title: { eq: "Home" } }) {
      edges {
        node {
          title
          body {
            body
          }
        }
      }
    }
    allContentfulBlogPost(sort: { fields: date, order: DESC }, limit: 3) {
      edges {
        node {
          id
          title
          date
          createdAt
          body {
            body
          }
        }
      }
    }
  }
`
