import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

class Buttonss extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return (
      <div>
        {this.props.data.map((nappula) => {
          return <button>{nappula.name}</button>;
        })}
      </div>
    );
  }
}

const Statistiikka = (props) => {
  return (
    <div>
      <h1>Statistiikka</h1>
      {props.arvo.map(function (parts, index) {
        return (
          <div key={index}>
            <table className="table">
              <tbody>
                <tr>
                  <td>{parts.name}</td>
                  <td>{parts.summa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parts: "",
    };
  }
  data() {
    this.setState({
      name: "Anna palautetta",
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
        <Header title={this.state.name} />
        <Buttons nappula={this.state.parts} />
        <Statistiikka arvo={this.state.parts} />
        <Buttonss data={this.state.parts} />
      </div>
    );
  }
}

const Apps = () => {
  const data = {
    name: "Anna palautetta",
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

  return (
    <div>
      <Header title={data.name} />
      <Buttons nappula={data.parts} />
      <Statistiikka arvo={data.parts} />
      <Buttonss
        name={data.parts.name}
        value={data.parts.value}
        summa={data.parts.summa}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
