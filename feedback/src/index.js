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
      <h1>Anna palautetta</h1>
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
          summa: 4,
        },
      ],
    };
    const joku = (props) => {
      const initialState = {
        name: String,
        value: Number,
        summa: Number,
      };

      function reducer(state = initialState, action) {
        switch (action.type) {
          case "VAIHDA":
            return {
              ...state,
              summa: action.summa,
            };
          default:
            return state;
        }
      }
    };
  }

  lisaa1 = (arvo) => {
    console.log("lisaa1", arvo);
    console.log(this.state);
    //console.log(this.state.parts);
    return this.setState(
      ...this.state,
      {
        parts: [...this.state, { summa: this.state.parts[arvo].summa + 1 }],
      },
      console.log(this.state),
      console.log(this.state.summa)
    );
  };

  nimea = (arvo) => {
    console.log(this.state.name);
    console.log(this.state);
    return this.setState({
      name: (this.state.name = arvo),
    });
  };

  asetaArvoon = (arvo) => {
    console.log(this.state.parts[arvo].name, this.state.parts[arvo].summa);
    console.log(this.state);
    return this.setState([
      {
        parts: [{ summa: this.state.parts[arvo].summa + 1 }],
      },
    ]);
  };
  render() {
    return (
      <div>
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

const App = () => {
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
    </div>
  );
};

ReactDOM.render(<Apps />, document.getElementById("root"));
