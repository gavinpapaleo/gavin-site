import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Minecraft = () => (
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

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Minecraft
