import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
      <div className={"container-fluid bg-dark border-bottom border-light-0"}>
        <div className={"container-md text-start py-2 text-light"}>
          <h1>TOČKA</h1>
        </div>
      </div>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
