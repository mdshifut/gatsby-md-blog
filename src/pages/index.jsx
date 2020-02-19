import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "./index.scss"

const Home = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleFetch {
      site {
        siteMetadata {
          title
          siteSubTitle
        }
      }
    }
  `)

  const { title, siteSubTitle } = data.site.siteMetadata
  return (
    <Layout>
      <div className="home-page page-bg">
        <div className="home-page__inner">
          <h1>Hi! I'm {title}</h1>
          <h3>I'm a {siteSubTitle}</h3>
          Need a developer{" "}
          <a href="https://www.shifuthossain.com">contact me</a>
        </div>
      </div>
    </Layout>
  )
}

export default Home
