import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import favicon from '../../static/favicon.ico'

import profile from '../../assets/images/profile-square.jpg'
import LinkedInIcon from '../../assets/images/linkedin.svg'
import GithubIcon from '../../assets/images/github.svg'
import TwitterIcon from '../../assets/images/twitter.svg'
import StackoverflowIcon from '../../assets/images/stackoverflow.svg'
import ImdbIcon from '../../assets/images/imdb.svg'

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
            <div className={styles.container}>
              <div className={styles.profile}>
                <div class={styles.imageCropper}>
                  <img className={styles.profilePic} src={profile} />
                </div>

                <div className={styles.contact}>
                  You can find me on:
                  <ul className={styles.contactLinks}>
                    <li>
                      <TwitterIcon className={styles.linkIcon} />
                      <a
                        target="_blank"
                        href="https://twitter.com/david_basalla"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <LinkedInIcon className={styles.linkIcon} />
                      <a
                        target="_blank"
                        href="https://uk.linkedin.com/in/david-basalla-6107151"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <GithubIcon className={styles.linkIcon} />
                      <a target="_blank" href="https://github.com/davidbasalla">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <StackoverflowIcon className={styles.linkIcon} />
                      <a
                        target="_blank"
                        href="http://stackoverflow.com/users/1348923/david-basalla"
                      >
                        StackOverflow
                      </a>
                    </li>
                    <li>
                      <ImdbIcon className={styles.linkIcon} />
                      <a
                        target="_blank"
                        href="https://www.imdb.com/name/nm2430494"
                      >
                        IMDB
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.mainBody}>
                <div className={styles.intro}>
                  <div className={styles.introText}>
                    <ReactMarkdown source={page.body.body} />
                  </div>

                  <div className={styles.fancyLinks}>
                    <Link to={`/code/`} className={styles.fancyLink}>
                      <div className={styles.tile}>{'Code'}</div>
                    </Link>

                    <Link to={`/movies/`} className={styles.fancyLink}>
                      <div className={styles.tile}>{'VFX'}</div>
                    </Link>

                    <Link to={`/blog/`} className={styles.fancyLink}>
                      <div className={styles.tile}>{'Blog'}</div>
                    </Link>
                  </div>
                </div>

                <h1 className={styles.blogHeader}>Latest blog posts:</h1>
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
