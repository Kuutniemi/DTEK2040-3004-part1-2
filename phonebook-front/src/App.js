import React from "react";
import Yhteystiedot from "./components/Yhteystiedot";
import Alert from "./components/Alert";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: "",
      newNumber: "",
      alert: null,
    };
  }

  handleAdd = () => {
    const newName = this.state.newName;
    const newNumber = this.state.newNumber;
    this.state.persons.push({ name: newName, number: newNumber });
    this.setState({ newName: "", newNumber: "" });
    console.log(this.state.persons);
  };

  handleAlert = (alert) => {
    this.setState({ alert: alert });
  };

  handleNameChange = (name) => {
    //console.log(event.target.value)
    this.setState({ newName: name });
  };

  handleNumberChange = (number) => {
    //console.log(event.target.value)
    this.setState({ newNumber: number });
  };

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <Alert alert={this.state.alert} />
        <Form
          handleNumberChange={this.handleNumberChange}
          handleNameChange={this.handleNameChange}
          handleAlert={this.handleAlert}
          handleAdd={this.handleAdd}
          state={this.state}
        />
        <h2>Yhteystiedot</h2>
        <Yhteystiedot data={this.state.persons} />
      </div>
    );
  }
}

export default App;
