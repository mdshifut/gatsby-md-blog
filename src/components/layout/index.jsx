import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
    <div className="body-wrapper">
      <Header title={title} subTitle={siteSubTitle} />

      <main>
        <div className="main-inner">{children}</div>

        <footer className="main-footer">
          Created by {title} &copy; {new Date().getFullYear()}{" "}
        </footer>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
