import React from 'react'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import profile from '../../assets/images/profile.jpg'
import cv from '../../assets/docs/CV_2023.pdf'

import styles from './about.module.css'

export default ({ data, location }) => {
  const page = data.allContentfulPage.edges[0].node

  return (
    <Layout location={location}>
      <div className="wrapper">
        <div className={styles.preview}>
          <img className={styles.profilePic} src={profile} />
          <h1>About</h1>

          <p style={{ 'margin-top': '30px' }}>
            <h2>RESUME/CV</h2>
            <p>
              <a href={cv} target="_blank">
                PDF
              </a>
            </p>
          </p>
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
