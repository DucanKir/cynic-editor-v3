import React from 'react';
import { withRouter } from 'react-router-dom';

import './navbar.styles.scss';



class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }
  }


  render() {
    return (
      <div className="navbar">
        <h3 className="header">Циничный Редактор</h3>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default withRouter(Navbar);
