import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Minecraft = (props) => (
  <Layout>
    <SEO title="Minecraft" />
    <h1>Minecraft</h1>
    <h2>Tips</h2>
    <ul>
      <li>Do not dig strait dawn</li>
      <li>When you die in the nether world by a bunch of zomdie pig men dont go to try to go get it back</li>
      <li>When your are out in the woods,water or in the desert go back to your house befor all the mobs come out</li>
    </ul>
    <h2>How to build an end portal</h2>

    <p>A full Nether partal can be crafted from 14 blocks of obsidian. If your're short on obsidian, save yourself 4 blocks and cut out the corners. It'll sill work! </p>
    <ol>
    </ol>
    <h3>Mobs that are in the Nether</h3>

    <ol>
      <li>First there is the Gast. The Gasts helth ponts are 10 ponts and it's attack pont is 17 max.</li>
      <li>The next mob is the Magma Cube. The Magma cubes helth ponts are large 16 and medium 4 and is's attack ponts are large 6, meduium 4, tiny 3. </li>
      <li>Now there is the Blaze. The Blaze's helth ponts are 20 max and its attack ponts are 3-9.</li>
      <li>Theres the Wither Skeleton. the Wither Skeleton's helth ponts are 20 max and its attack ponts are 4-10</li>
      <li>Now the Zombie Pigman. The Zombie Pigman's helth ponts are 20 max and it's attack ponts are 5-13.</li>
      <li>Now for the last one the utiment Wither! The Wither's heith ponts are 300 max and it's attack ponts are 5-20.  </li>
      
    </ol>

    <h4>How to find the ender portal</h4>
    <ol>
      <li>
        <p>Use  your eye of ender and it will fly away from you into the air befor dropping back to the ground. Follow it, pick it up, and repeat. There's a 1 in 5 chance that the eye will shatter when it drops, witch is why you need several. </p>
      </li>
      <li>
        <p>Eventuall the eye wiil keep falling onto the same spot of land. This is were you'll find the stronghold, and you'll need to dig underground to get in. Just remember the number one rule for Minecraft: Never dig straight dawn, or you could fall into the lava in the center of the portal.</p>
      </li>
      <li>
        <p></p>
      </li>
      <li>
        <p></p>
      </li>     
    </ol>


    <Img fluid={props.data.portalRoom.childImageSharp.fluid} />
    <Img fluid={props.data.endPortal.childImageSharp.fluid} />



    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Minecraft


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
    portalRoom: file(relativePath: { eq: "StrongholdPortalRoom.png" }) {
      ...fluidImage
    }
    endPortal: file(relativePath: { eq: "End_Portal.png" }) {
      ...fluidImage
    }
  }
`