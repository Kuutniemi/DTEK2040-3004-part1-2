import React from "react";
import Yhteystiedot from "./components/Yhteystiedot";
import Alert from "./components/Alert";
import Form from "./components/Form";
import axios from "axios";

const URL = "http://localhost:3001/persons/";
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

  componentDidMount() {
    //console.log("did mount");
    axios.get(URL).then((response) => {
      //console.log("promise fulfilled", response);
      this.setState({ persons: response.data });
    });
  }

  handleDelete = (yht) => {
    //console.log(id)
    if (window.confirm(`Haluatko varmasti poistaa "${yht.name}"`)) {
      axios.delete(`http://localhost:3001/persons/${yht.id}`).then(() => {
        axios.get(URL).then((response) => {
          //console.log("promise fulfilled", response);
          this.setState({ persons: response.data });
        });
      })
    } else {
      console.log("Peruttiin")
    }
    
  };

  handleAdd = () => {
    const newName = this.state.newName;
    const newNumber = this.state.newNumber;
    const yhtObj = {
      name: newName,
      number: newNumber,
    };
    axios.post(URL, yhtObj).then((response) => {
      this.setState({
        persons: this.state.persons.concat(response.data),
        newName: "",
        newNumber: "",
      });
    });
    //this.setState({ newName: "", newNumber: "" });
    //console.log(this.state.persons);
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
        <Yhteystiedot
          data={this.state.persons}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
