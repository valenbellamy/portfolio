import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <Link to="/" activeClassName="--active">
          {"{ "}valentinBellamy{" }"}
        </Link>
        <ul>
          <li>
            <Link to="/a-propos" activeClassName="--active">
              A propos
            </Link>
          </li>
          {/* <li>
            <Link to="#">Blog</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
