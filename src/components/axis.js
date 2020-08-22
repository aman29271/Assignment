import React from "react";
import { axisBottom, axisLeft, select } from "d3";

export default class Axis extends React.Component {
  componentDidUpdate() {
    this.renderAxis();
  }

  componentDidMount() {
    this.renderAxis();
  }

  renderAxis() {
    var node = this.refs.axis;
    var axis = this.props.bottom ? axisBottom() : axisLeft();
    var axisOriented = axis.ticks(5).scale(this.props.scale);
    select(node).call(axisOriented);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>;
  }
}
