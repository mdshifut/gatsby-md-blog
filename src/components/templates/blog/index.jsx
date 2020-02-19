import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../../layout"
import "./single-post.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const Blog = ({ data }) => {
  const {
    frontmatter: { title, date, featuredImage },
    html,
  } = data.markdownRemark
  return (
    <Layout>
      <div className="single-post-page">
        <Img
          fluid={featuredImage.childImageSharp.fluid}
          className="single-post-page__img"
        />
        <h1 className="single-post-page__heading">{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </Layout>
  )
}

export default Blog
