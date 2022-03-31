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

const Keskiarvo = (props) => {
  return (
    <div>
      <table key={888}>
        <tbody>
          <tr>
            <td>keskiarvo</td>
            <td>{props.ka.pos}%</td>
          </tr>
        </tbody>
      </table>
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
      avg: 0,
      pos: 0,
      list: [],
    };
  }

  //Paras
  lisaa1 = (arvo) => {
    console.log("lisaa1", arvo);
    console.log(this.state);
    const newState = this.state.parts;
    newState[arvo].summa = this.state.parts[arvo].summa + 1;
    return this.setState(newState), this.keskiarvo(arvo), this.positiiviset();
  };

  keskiarvo = (arvo) => {
    const list = this.state.list;
    list.push(this.state.parts[arvo].value);
    const ave = (arr) => arr.reduce((a, b) => a + b, 0) / list.length;
    console.log(list);
    console.log(ave(list).toFixed(1));
    return this.setState({
      avg: ave(list).toFixed(1),
    });
  };

  positiiviset() {
    const list = this.state.list;
    const posArr = list.filter((num) => num > 0);
    console.log("PosArr", posArr);
    const pros = (posArr.length / this.state.list.length) * 100;
    return this.setState({
      pos: pros.toFixed(1),
    });
  }

  // Oikea tapa laskea keskiarvo eli toimisi. ongelma lisätä listaan x määrä (1,0,-1)
  // const ave = arr => arr.reduce((a,b) => a+b,0 ) / arr.lenght
  // console.log((array).toFixed(1))

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
        />
        <Statistiikka data={this.state.parts} ka={this.keskiarvo} />
        <Keskiarvo ka={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<Apps />, document.getElementById("root"));
