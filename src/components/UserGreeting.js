//shortcut for constructor rconst
//rce
import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // if (this.state.isLoggedIn) {
    //     return <h1>Welcome Vignika</h1>
    // }
    // else {
    //     return <h1>Welcome Guest</h1>
    // }

    // return (this.state.isLoggedIn)?//ternary operator
    // <h1>Welcome Vignika</h1>:
    // <h1>Welcome Guest</h1>

    return  (this.state.isLoggedIn) &&  //shortcircuit operator
          <h1>Welcome Vignika</h1>
  }
}

export default UserGreeting