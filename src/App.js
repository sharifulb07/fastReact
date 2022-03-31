import React from "react";
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Test name="shariful islam" />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


class Test extends React.Component{
  constructor(props){
    super(props);
    this.state={
      age:34
    }
  }
    render(){
      return(
        <>
      <h1>Welcome to {this.props.name} world </h1>

      <p>my age is {this.state.age} years old </p>

        </>
      )
    }
  


}
