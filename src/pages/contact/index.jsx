import React from "react"
import Layout from "../../components/layout"
import "./contact.scss"

const Home = props => {
  return (
    <Layout>
      <div className="contact-page page-bg">
        <div className="contact-page__inner">
          <h1>Contact</h1>
          <p>
            The best way to contact me via email. just send me an email to
            mdshifut @gamil.com
          </p>
          <a href="https://www.shifuthossain.com">
            Want to work with me ? Reach out.
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Home
