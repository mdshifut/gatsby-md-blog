import React from "react"
import Layout from "../../components/layout"
import "./about.scss"

const Home = props => {
  return (
    <Layout>
      <div className="about-page page-bg">
        <div className="about-page__inner">
          <h1>About</h1>
          <p>I'm current work as a fulltime freelancer</p>
          <a href="https://www.shifuthossain.com">
            Want to work with me ? Reach out.
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Home
