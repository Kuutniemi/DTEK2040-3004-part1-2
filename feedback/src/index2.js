import React, { useState , Component} from "react";
import ReactDOM, { render } from "react-dom";
import './index.css';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        { this.props.data.map(nappula => {
          return (
            console.log('tapahtuuko'),
            <button key={nappula.value}>{nappula.name}</button>
          )
        })}
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      parts: [],
    });
  }
  dataus () {
    this.setState({
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
    });
  }
  render() {
    return (
      <div>
        <Buttons data={this.state.parts} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));