import React, {Component} from 'react';
import Navbar from '../components/Navbar';

class BasePage extends Component {
  
  render() {
    const {children} = this.props;

    return (
      <div>
        <Navbar />
        {children}
      </div>
    );
  }
}

export default BasePage;