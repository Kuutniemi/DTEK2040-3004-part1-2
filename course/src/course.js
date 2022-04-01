import React from "react";

class Koursi extends React.Component {
  constructor(props) {
    super(props);
    const contents = (props) => {
      return (
        <div>
          <h1> Moi </h1>
          {props.kurssi.map(function (parts, index) {
            return (
              <div key={index}>
                <div>
                  {parts.name} {parts.exercises}
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  }
}

export default Koursi;
// VITUSTI KESKEN
