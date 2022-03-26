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
     {
       props.data.map(function (parts, index){
         return (
           <div key={index}>
             <button type='button' onClick={() => props.aseta(5)}>{parts.name}</button>
           </div>
         )
       })
     }
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
  asetaArvoon = (arvo) => {
    console.log(this.state.parts)
    return () => {
      this.setState({parts: {summa: this.state.data.summa + arvo}})
      console.log(this.state.parts)
    }
  }
  render() {
    return(
      <div>
        <Buttons data={this.state.parts} aseta={this.asetaArvoon}/>
        <Statistiikka data={this.state.parts}/>
      </div>
    )
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
