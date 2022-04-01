import React from "react";
import ReactDOM from "react-dom";
import Course from "./course";

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
      <br />
      <div>Total exercises: {yht}</div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    
    //console.log("state", this.state.parts[1].name)
  }
  render() {
    return (
      <div>
        <Header kurssi={Course.name} />
        <Contents kurssi={Course.parts} />
        <Total kurssi={Course.parts} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
