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

const Buttons = (props) => {
  //const [summa, setSumma] = useState(props.arvo[index])
  const funktio = (index) => {
    console.log("painettu", index);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.data.map(function (parts, index) {
          return (
            <div key={index}>
              <button type="button" onClick={() => props.lisaa(index)}>
                {parts.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Statistiikka = (props) => {
  return (
    <div>
      <h1>Statistiikka</h1>
      {props.data.map(function (parts, index) {
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

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  //Paras
  lisaa1 = (arvo) => {
  console.log("lisaa1", arvo);
  console.log(this.state);
    //console.log(this.state.parts);
    const newState = this.state.parts
    newState[arvo].summa = this.state.parts[arvo].summa +1
    return (this.setState(newState))
  };
  

  
  //Uudellen nimeää Header
  nimee = (arvo) => {
    return this.setState(console.log(this.state), {
      name: (this.state.name = [arvo]),
    });
  };

  render() {
    return (
      <div>
        <Header title={this.state.name} />
        <Buttons
          data={this.state.parts}
          aseta={this.asetaArvoon}
          lisaa={this.lisaa1}
          nimea={this.nimea}
          reducer={""}
        />
        <Statistiikka data={this.state.parts} />
      </div>
    );
  }
}


ReactDOM.render(<Apps />, document.getElementById("root"));
