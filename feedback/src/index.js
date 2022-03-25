import React, {useState} from "react";
import ReactDOM, { render } from "react-dom";
import './index.css';

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

const Buttons = (props) => {
  const funktio = (index) => {
    return (
      console.log('painettu', index)
    )
  }
  return (
   <div>
     {
       props.nappula.map(function (parts, index){
         return (
           <div key={index}>
             <button type='button' onClick={({index}) => funktio(index)}>{parts.name}</button>
           </div>
         )
       })
     }
   </div>
  );
};

const Statistiikka = (props) => {
  return(
    <div>
      <h1>
        Statistiikka
      </h1>
      {
        props.arvo.map(function (parts, index){
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
          )
        })
      }
    </div>
  )
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

ReactDOM.render(<App />, document.getElementById("root"));
