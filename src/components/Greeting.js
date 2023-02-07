
import React from "react";
function UserGreeting() {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting() {
  return <h1>Please Sign Up Now</h1>;
}

function Greeting(props) {
  const isToggleOn = props.isToggleOn;

  if (isToggleOn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default Greeting;
