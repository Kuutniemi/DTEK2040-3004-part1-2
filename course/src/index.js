import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  );
};

const Contents = (props) => {
  return (
    <div>
      <h1> Moi </h1>
      {props.kurssi.map(function (parts, index) {
        return (
          <div key={index}>
            <div>{parts.name} {parts.exercises}</div>
          </div>
        )
      })}
    </div>
  );
};

const Total = (props) => {
  const yht = props.kurssi.reduce((sum, {exercises}) => sum + exercises,0 )
  return (
    <div>
      <div>Total exercises: {yht}</div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Superadvanced web and mobile programming",
      parts: [
        {
          name: "Basics of React",
          exercises: 8,
          id: 1
        },
        {
          name: "Using props",
          exercises: 10,
          id: 2
        },
        {
          name: "Component states",
          exercises: 12,
          id: 3
        },
      ],
    };
    //console.log("state", this.state.parts[1].name)
  }
  render() {
    return (
      <div>
        <Header kurssi={this.state.parts.name} />
        <Contents kurssi={this.state.parts} />
        <Total kurssi={this.state.parts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
