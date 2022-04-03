import React from "react";

const Contact = ({ yht }) => {
  return (
    <li>
      <strong>Nimi: </strong> {yht.name}
      <strong> Numero: </strong> {yht.number}
    </li>
  );
};

export default Contact;
