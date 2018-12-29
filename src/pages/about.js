import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layout'

const About = () => (
  <Layout>
    <h1>Hi from the About</h1>

    <p>Welcome to page 2</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
