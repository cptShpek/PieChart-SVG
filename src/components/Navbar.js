import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">PieChart App</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Set Items</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pie-chart">Pie Chart</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
