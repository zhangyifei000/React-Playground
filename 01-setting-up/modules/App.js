import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>react router tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/repos/bill/facebook">Bill Repo</NavLink></li>
          <li><NavLink to="/filterProductTable"> table </NavLink></li>
        </ul>
        {this.props.children || <Home />}
      </div>
    )
  }
})
