import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <div>
      <Link to="/baseball/">Baseball</Link>
      <Link to="/minecraft/">Minecraft</Link>
      <Link to="/snowboarding/">Snowboarding</Link>
    </div>
  </Layout>
)

export default IndexPage
