import React from "react"
import Layout from "../../components/layout"
import "./404.scss"

const Home = props => {
  return (
    <Layout>
      <div className="not-found-page page-bg">
        <div className="about-page__inner">
          <h1>Page your looking for is not found.</h1>
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
