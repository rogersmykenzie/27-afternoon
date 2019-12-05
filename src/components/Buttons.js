import React from "react";
//components
import AddPersonMenu from "./AddPersonMenu";

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      wasClicked: false
    };
    this.toggleWasClicked = this.toggleWasClicked.bind(this);
  }

  toggleWasClicked() {
    this.setState({ wasClicked: !this.state.wasClicked });
  }

  render() {
    return (
      <div className="buttons-container">
        <h5 onClick={this.props.clickPrevious}>{"<"} Previous</h5>
        <div className="buttons__button-group">
          <button>Edit</button>
          <button>Delete</button>
          <button onClick={this.toggleWasClicked}>
            {this.state.wasClicked === false ? "New" : "Close"}
          </button>
        </div>
        <h5 onClick={this.props.clickNext}>Next > </h5>
        {this.state.wasClicked === true ? <AddPersonMenu /> : null}
      </div>
    );
  }
}

export default Buttons;
