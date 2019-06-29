const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const movieTemplate = path.resolve('./src/templates/movie.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  id
                }
              }
            }
            allContentfulMovie(sort: { fields: startYear, order: DESC }) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.id}/`,
            component: blogPost,
            context: {
              id: post.node.id,
            },
          })
        })

        const movies = result.data.allContentfulMovie.edges
        movies.forEach((movie, index) => {
          createPage({
            path: `/movies/${movie.node.id}/`,
            component: movieTemplate,
            context: {
              id: movie.node.id,
            },
          })
        })
      })
    )
  })
}
