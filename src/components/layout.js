import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import Header from "./header"
import "../static/fonts/fonts.css"
import "../static/style/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
