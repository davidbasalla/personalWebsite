import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'

import styles from './article-preview.module.css'

export const dateString = input => {
  const currentDate = new Date(input)

  const date = currentDate.getDate()
  const month = currentDate.getMonth() //Be careful! January is 0 not 1
  const year = currentDate.getFullYear()

  const output = date + '/' + (month + 1) + '/' + year
  return output
}

export default ({ article }) => {
  const regex = /images..*(?:png|jpg)/g
  const images = article.body.body.match(regex) || []

  return (
    <div className={styles.preview}>
      <div className={styles.header}>
        <h3 className={styles.previewTitle}>
          <Link to={`/blog/${article.id}`}>{article.title}</Link>
        </h3>
        <small className={styles.dateField}>
          {dateString(article.createdAt)}
        </small>
      </div>
      {images.length > 0 && <img src={`https://${images[0]}?h=150`} />}
      <ReactMarkdown source={article.body.body.substring(0, 400) + '...'} />
      <Link to={`/blog/${article.id}`}>READ MORE</Link>
    </div>
  )
}
