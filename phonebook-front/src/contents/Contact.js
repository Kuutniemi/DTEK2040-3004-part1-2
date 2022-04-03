import React from "react";

const Contact = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((yht) => (
          <li key={yht.name}>
            <strong>Nimi: </strong> {yht.name}
            <strong> Numero: </strong> {yht.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
