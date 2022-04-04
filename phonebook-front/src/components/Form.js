import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: null,
      newNumber: "",
      newName: "",
    };
  }

  addContact = (event) => {
    event.preventDefault();
    const newName = this.props.state.newName;
    const persons = this.props.state.persons;
    //const alert = this.props.alert
    const checkIfExist = (obj) => obj.name === newName;
    if (persons.some(checkIfExist)) {
      this.props.handleAlert(newName);
    } else {
      this.props.handleAlert(null);
      this.props.handleAdd();
    }

    //console.log(contacts.some(checkIfExist))
  };

  handleClear = (event) => {
    this.props.handleAlert(null);
    this.props.handleNameChange("");
    this.props.handleNumberChange("");
  };

  handleNameChange = (event) => {
    //console.log(event.target.value)
    this.props.handleNameChange(event.target.value);
  };

  handleNumberChange = (event) => {
    //console.log(event.target.value)
    this.props.handleNumberChange(event.target.value);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          Nimi:
          <input
            value={this.props.state.newName}
            onChange={this.handleNameChange}
            required
          />
          <br />
          Numero:
          <input
            value={this.props.state.newNumber}
            onChange={this.handleNumberChange}
            required
          />
          <br />
          <button type="submit">save</button>
          <button onClick={this.handleClear}>clear</button>
        </form>
      </div>
    );
  }
}

export default Form;
