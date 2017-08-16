import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return(
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router">1</Link></li>
          <li><Link to="/repos/facebook/react">2</Link></li>
          <li><Link to="/repos/Hello/World">3</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
