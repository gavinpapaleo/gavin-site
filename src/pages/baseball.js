import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Baseball = (props) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Baseball</h1>
    <Img fluid={props.data.baseball.childImageSharp.fluid} style={{ marginTop: 20 }} />
    {/* <Img fixed={props.data.baseball.childImageSharp.fixed} style={{ marginTop: 20 }} /> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Baseball

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fixedImage = graphql`
  fragment fixedImage on File {
    childImageSharp {
      fixed(height: 700) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    baseball: file(relativePath: { eq: "baseball.jpg" }) {
      ...fluidImage
    }
  }
`