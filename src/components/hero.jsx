import React from 'react'
import PropTypes from 'prop-types'

export class Hero extends React.PureComponent {
  render() {
    return <div className="container">
      <div className={`hero hero--${this.props.type}`}>{this.props.children}</div>
    </div>
  }
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['small', 'medium', 'large']).isRequired
}