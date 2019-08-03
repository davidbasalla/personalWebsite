import React from 'react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import profile from '../../assets/images/profile.jpg'

import styles from './about.module.css'

export default ({ data, location }) => {
  const page = data.allContentfulPage.edges[0].node

  return (
    <Layout location={location}>
      <div className="wrapper">
        <div className={styles.preview}>
          <img className={styles.profilePic} src={profile} />
          <ReactMarkdown source={page.body.body} />
        </div>
      </div>
    </Layout>
  )
}

export const aboutMeQuery = graphql`
  query MyQuery {
    allContentfulPage(filter: { title: { eq: "About me" } }) {
      edges {
        node {
          title
          body {
            body
          }
        }
      }
    }
  }
`
