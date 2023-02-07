import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // this.state = { counter: 2 };
  }

  componentDidMount() {
    this.TimerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

   tick=()=> {
    this.setState({
      date: new Date(),
    });
    // this.setState((state, props) => {
    //   return {
    //     counter: state.counter + props.increament,
    //   };
    // });
  }

  render() {
    return (
      <div>
        <h1>Hello World sharif </h1>
        <p>Now time is {this.state.date.toLocaleTimeString()} . GO go </p>
        <h2>be cool </h2>
      </div>
    );
  }
}

export default Clock;
