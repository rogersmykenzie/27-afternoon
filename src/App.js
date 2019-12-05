import React from "react";
//components
import Header from "./components/Header";
import Container from "./components/Container";
//css
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
