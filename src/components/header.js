import { Link } from "gatsby"
import React from "react"
import css from 'styled-jsx/css'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/" style={{
          color: 'black',
          textDecoration: 'none'
        }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    <style jsx>{styles}</style>
  </header>
)

const styles = css`
  header {
    background: #00FF7F;
    margin-bottom: 1.45rem;
  }

  header > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }

  h1 {
    margin: 0
  }
`

export default Header
