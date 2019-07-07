import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

import favicon from '../../static/favicon.ico'

import styles from './blog-post.module.css'

export const dateString = input => {
  const currentDate = new Date(input)

  const date = currentDate.getDate()
  const month = currentDate.getMonth() //Be careful! January is 0 not 1
  const year = currentDate.getFullYear()

  const output = date + '/' + (month + 1) + '/' + year
  return output
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div className="mainWrapper">
          <Helmet
            title={`${post.title} | ${siteTitle}`}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: `${favicon}`,
              },
            ]}
          />
          <div className="wrapper">
            <h1>{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {dateString(post.createdAt)}
            </p>

            <div className={styles.postBody}>
              <ReactMarkdown source={post.body.body} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(id: { eq: $id }) {
      title
      createdAt
      body {
        body
      }
    }
  }
`
