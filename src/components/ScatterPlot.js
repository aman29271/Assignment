import React, { useState } from "react";
import { max, scaleLinear } from "d3";
import styled from "styled-components";
import bulma from "../scss/bulma.module.scss";
import DataCircles from "./DataCircles";
import Modal from "./Modal";

const ScatterPlot = (props) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const xMax = (data) => max(data, (d) => d[0]);
  const yMax = (data) => max(data, (d) => d[1]);
  const xScale = (props) => {
    return scaleLinear()
      .domain([0, xMax(props.data)])
      .range([props.padding, props.width - props.padding * 2]);
  };
  const yScale = (props) => {
    return scaleLinear()
      .domain([0, yMax(props.data)])
      .range([props.height - props.padding, props.padding]);
  };
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (
    <SvgWrapper>
      <Button
        className={`${bulma.button} ${bulma["is-warning"]}`}
        onClick={() => {
          setIsModalActive(true);
        }}
      >
        Expand
      </Button>
      <SVG data={props} scales={scales} />
      <Modal isActive={isModalActive} setModal={setIsModalActive}>
        <SVG data={props} scales={scales} />
      </Modal>
    </SvgWrapper>
  );
};
export default ScatterPlot;

const SVG = ({ data, scales }) => {
  return (
    <svg width={data.width} height={data.height}>
      <DataCircles {...data} {...scales} />
    </svg>
  );
};
const Button = styled.button`
  padding: 0.25rem 0.5rem;
  font-size: 0.65rem;
  position: absolute;
  right: 0;
  top: 0;
`;
const SvgWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  border: 2px solid #1a1a1a;
  margin-bottom: 20px;
  border-radius: 5px;
`;
