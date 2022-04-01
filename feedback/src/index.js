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
  if (!props.render) {
    return (
      <div>
        <h1>Statistiikka</h1>
        Ei näytettävää statistiikkaa
      </div>
    )
  } else {
    return(
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
  </div>)}


};

const Keskiarvo = (props) => {
  if (!props.render) {
    return null
  } else {
  return (
    <div>
      <br />
      <table key={888}>
        <tbody>
          <tr>
            <td>keskiarvo</td>
            <td>{props.ka.avg}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )};
};

const Prosentti = (props) => {
  if (!props.render) {
    return null
  } else {
  return(
    <div>
      <table key={88}>
        <tbody>
          <tr>
            <td>positiivisia</td>
            <td>{props.ka.pos}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )}
}

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false,
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
    const newState = this.state.parts;
    newState[arvo].summa = this.state.parts[arvo].summa + 1;
    return this.setState(newState), this.keskiarvo(arvo), this.positiiviset();
  };

  keskiarvo = (arvo) => {
    console.log(this.state.render)
    const list = this.state.list;
    list.push(this.state.parts[arvo].value);
    const ave = (arr) => arr.reduce((a, b) => a + b, 0) / list.length;
    return this.setState({
      avg: ave(list).toFixed(1),
      render: true
    });
  };

  positiiviset() {
    const list = this.state.list;
    const posArr = list.filter((num) => num > 0);
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
        <Statistiikka data={this.state.parts} ka={this.keskiarvo}  render={this.state.render}/>
        <Keskiarvo ka={this.state} render={this.state.render}/>
        <Prosentti ka={this.state} render={this.state.render}/>
      </div>
    );
  }
}

ReactDOM.render(<Apps />, document.getElementById("root"));
