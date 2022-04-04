import React from "react";

class Yhteystiedot extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((yht) => (
            <li key={yht.name}>
              <strong> Nimi: </strong> {yht.name}
              <strong> Numero: </strong> {yht.number} {yht.id}
              <button
                type="button"
                onClick={() => this.props.handleDelete(yht)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Yhteystiedot;
// <strong> ID: </strong> {yht.id}
