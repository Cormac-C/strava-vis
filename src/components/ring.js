import React, { Component } from "react";

export default class Ring extends Component {
  constructor(props) {
    super(props);

    const { radius } = this.props;
    this.stroke = 40;
    this.normalizedRadius = radius - this.stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const percentage = this.props.percentage || "60";
    const radius = this.props.radius || "100";
    const strokeDashoffset =
      this.circumference - percentage * this.circumference;
    const stroke = this.stroke;
    return (
      <div className="ring">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#A03E99"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={this.circumference + " " + this.circumference}
            style={{ strokeDashoffset }}
            stroke-width={stroke}
            r={this.normalizedRadius}
            cx={radius}
            cy={radius}
            transform={
              "rotate(-90, " +
              radius +
              ", " +
              radius +
              ") scale(1, -1) translate(0, " +
              -radius * 2 +
              ")"
            }
          />
        </svg>
      </div>
    );
  }
}
