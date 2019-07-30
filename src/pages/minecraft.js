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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Minecraft