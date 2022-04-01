import React, { useState, Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('ju')
    const name = this.props.data.name
    const value = this.props.data.value
    const summa = this.props.data.summa
    return (
      <div>
        {console.log('moi')}
        {console.log(name, value, summa)}
        <button>{name}</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parts: [
        {
          name: "hyvä",
          value: 1,
          summa: 0,
        },
        {
          name: "neutraali",
          value: 0,
          summa: 0,
        },
        {
          name: "huono",
          value: -1,
          summa: 0,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Buttons data={this.state} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
