import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Snowboarding = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Snowboarding</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Snowboarding
