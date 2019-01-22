import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import { Footer } from './footer'
import { Header } from './header'

export const Layout = ({ children, pageTitle }) => (
  <>
    <Helmet>
      <title>{pageTitle} | Material Template 3.0</title>
    </Helmet>

    <div className={`wrapper page page-${pageTitle.toLowerCase()}`}>
      <Header />

      {children}

      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired
}

export default Layout
