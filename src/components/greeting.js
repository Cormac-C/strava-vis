import React, { Component } from "react";

export default class Greetings extends Component {
  render() {
    const name = this.props.name || "User";
    const activity = this.props.activity || "ran";
    const metric = this.props.metric || "as far as";
    return (
      <div>
        <h1>
          Hello {name}, this year you {activity} {metric} ...
        </h1>
      </div>
    );
  }
}
