import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import htmlToText from "html-to-text"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import truncateString from "../../utils/truncateString"
import "./blog.scss"

const Blog = props => {
  const data = useStaticQuery(graphql`
    query AllBlogPostQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            html
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="blog-page">
        <div className="blog-page__inner">
          <h1 className="blog-page__heading">My Blog</h1>
          <div className="post-wrapper">
            {data.allMarkdownRemark.edges.map(edge => {
              const {
                frontmatter: { title, date, featuredImage },
                fields: { slug },
                html,
              } = edge.node

              return (
                <div className="single-post" key={title}>
                  <Link to={`blog/${slug}`}>
                    <Img
                      fluid={featuredImage.childImageSharp.fluid}
                      className="single-post__img"
                    />

                    <div className="single-post__body">
                      <h2>{title}</h2>
                      <span className="single-post__date">{date}</span>
                      <p>{truncateString(htmlToText.fromString(html), 300)}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
