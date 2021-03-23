import "./App.css";
import React, { Component } from "react";
import Personstate from "./Components/Person/Personstate";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> React State chekpoint</h1>
        <Personstate />
      </div>
    );
  }
}
