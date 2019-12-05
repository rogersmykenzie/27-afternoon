import React from "react";
//components
import Buttons from "./Buttons";
//data
import data from "../data";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      people: data,
      currIndex: 0
    };
    this.clickNext = this.clickNext.bind(this);
    this.clickPrevious = this.clickPrevious.bind(this);
  }

  clickNext() {
    console.log(this.state.currIndex);
    if (this.state.currIndex === this.state.people.length - 1) {
      this.setState({ currIndex: 0 });
    } else {
      this.setState({ currIndex: this.state.currIndex + 1 });
    }
  }

  clickPrevious() {
    if (this.state.currIndex === 0) {
      this.setState({ currIndex: this.state.people.length - 1 });
    } else {
      this.setState({ currIndex: this.state.currIndex - 1 });
    }
  }

  render() {
    const { people, currIndex } = this.state;
    return (
      <div className="container-container">
        <main className="smaller-container">
          <h1>
            {people[currIndex].name.first} {people[currIndex].name.last}
          </h1>
          <h2>
            <span className="container-from">From:</span>
            {people[currIndex].city} {people[currIndex].country}
          </h2>
          <h2>
            <span className="container-from">Job Title:</span>
            {people[currIndex].title}
          </h2>
          <h2>
            <span className="container-from">Employer: </span>
            {people[currIndex].employer}
          </h2>
          <h2>
            <span className="container-from">Favorite Movies:</span>
          </h2>
          <ol>
            {people[currIndex].favoriteMovies.map(element => {
              return <li>{element}</li>;
            })}
          </ol>
        </main>

        <Buttons
          clickNext={this.clickNext}
          clickPrevious={this.clickPrevious}
        />
      </div>
    );
  }
}

export default Container;
