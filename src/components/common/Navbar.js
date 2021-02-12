import React from 'react'
import { Link, withRouter } from 'react-router-dom'



class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }
  }


  render() {
    return (
      <div>
        <div>Циничный Редактор</div>
        <div></div>
        <div></div>
      </div>
    )
  }
}

export default withRouter(Navbar)
