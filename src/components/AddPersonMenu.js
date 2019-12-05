import React from "react";

class AddPersonMenu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input style={{ outline: "none" }} placeholder="First Name" />
        <input style={{ outline: "none" }} placeholder="Last Name" />
        <input style={{ outline: "none" }} />
        <input style={{ outline: "none" }} />
        <input style={{ outline: "none" }} />
        <input style={{ outline: "none" }} />
        <button>Add</button>
      </div>
    );
  }
}

export default AddPersonMenu;
