import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import siteLogoImage from "./profile.webp"
import "./header.scss"

const Header = ({ title, subTitle }) => {
  return (
    <header className="main-header">
      <Link className="site-title" to="/">
        <div className="site-title__left">
          <img src={siteLogoImage} alt={title} />
        </div>
        <div className="site-title__right">
          <h1>{title}</h1>
          <small>{subTitle}</small>
        </div>
      </Link>

      <nav className="main-nav">
        <Link
          className="main-nav__item"
          activeClassName="main-nav__item--active"
          to="/"
        >
          <span className="material-icons">home</span> Home
        </Link>
        <Link
          className="main-nav__item"
          activeClassName="main-nav__item--active"
          to="/about"
        >
          <span className="material-icons">person</span> About
        </Link>
        <Link
          className="main-nav__item"
          activeClassName="main-nav__item--active"
          to="/blog"
        >
          <span className="material-icons">speaker_notes</span> Blog
        </Link>
        <Link
          className="main-nav__item"
          activeClassName="main-nav__item--active"
          to="/contact"
        >
          <span className="material-icons">email</span> Contact
        </Link>
      </nav>

      <div className="social_links">
        <a href="http://facebook.com">facebook</a>
        <a href="http://facebook.com">Twitter</a>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default Header
