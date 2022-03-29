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
          <td>
            keskiarvo
          </td>
          <td>
            {props.ka.avg}
          </td>
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
      avg: 0.,
    };
  }

  /*componentDidUpdate(prevState) {
    if (this.state.parts !== prevState.parts){
      this.keskiarvo()
  }}*/

  //Paras
  lisaa1 = (arvo) => {
  console.log("lisaa1", arvo);
  console.log(this.state);
    //console.log(this.state.parts);
    const newState = this.state.parts
    newState[arvo].summa = this.state.parts[arvo].summa +1
    return (this.setState(newState)),
    this.keskiarvo(arvo)
  };
  
  keskiarvo = (arvo) => {
    console.log('ave',this.state.avg)
    var sum = this.state.avg
    var jakaja = 0
    var ka = sum / jakaja
    console.log(jakaja)
    this.state.parts.forEach(summa => {
      jakaja +=summa
    });
    sum += (this.state.parts[arvo].value) 
    return this.setState({
      avg: sum 
    })
  }
  
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
        <Statistiikka data={this.state.parts} ka={this.keskiarvo}/>
        <Keskiarvo  ka={this.state}/>
      </div>
    );
  }
}


ReactDOM.render(<Apps />, document.getElementById("root"));
