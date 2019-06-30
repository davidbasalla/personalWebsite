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

export default ({ article }) => (
  <div className={styles.preview}>
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.id}`}>{article.title}</Link>
    </h3>
    <small>{dateString(article.createdAt)}</small>
    <ReactMarkdown source={article.body.body.substring(0, 300) + '...'} />
    <Link to={`/blog/${article.id}`}>READ MORE</Link>
  </div>
)
