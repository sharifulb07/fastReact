import { LogInButton } from "./Log";
import { LogOutButton } from "./Log";
import React from "react";
import Greeting from "./Greeting";

class LogControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLogIn: false };
  }

  handleLogInClick(e) {
    e.preventDefault();
    this.setState( {
      isLogIn: true
    });
  }

  handleLogOutClick(e) {
    e.preventDefault();
    this.setState( {
        isLogIn: false
      });
  }

  render() {
    const isLogIn = this.state.isLogIn;
    let button;
    if (isLogIn) {
      button = <LogInButton onClick={() => this.handleLogInClick} />;
    } else {
      button = <LogOutButton onClick={() => this.handleLogOutClick} />;
    }
    return (
      <div>
        <Greeting isLogIn={false}/>
        {button}
      </div>
    );
  }
}


export default LogControl;