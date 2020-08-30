import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bulma from "../scss/bulma.module.scss";
import "../css/syntax.css";
import parserExtended from "./parser";
import Editor from "./editor";
import formatQuery from "./formatQuery";

const ParsedQuery = ({ query }) => {
  const [marker, setMarker] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [msg, setMsg] = useState("");
  const { code } = formatQuery(query);

  useEffect(() => {
    parserExtended(query)
      .then((res) => {
        const { message, column, error, line } = res;
        if (error) {
          let newMarker = [];
          newMarker.push({
            startRow: line - 1,
            startCol: column - 1,
            endCol: column + 1,
            endRow: line - 1,
            className: "error-marker",
            type: "background",
          });
          setMarker(newMarker);
          setMsg(message);
          setHasError(error);
        } else {
          setMsg("");
          setHasError(false);
          setMarker([])
        }
      })
      .catch((err) => {
        setHasError(true);
        setMsg(err);
      });
  }, [query]);
  return (
    <div className={bulma.content}>
      {hasError && (
        <ErrorMessage className={bulma["has-text-danger"]}>{msg}</ErrorMessage>
      )}
      <div className={bulma.field}>
        <div className={bulma.control}>
          <Editor value={code} markers={marker} />
        </div>
      </div>
    </div>
  );
};
export default ParsedQuery;

const ErrorMessage = styled.span``;
