import React, { useRef } from "react";
import styled from "styled-components";
import bulma from "../scss/bulma.module.scss";
import "../css/syntax.css";
import parserExtended from "./parser";

const ParsedQuery = ({ query }) => {
  const { error, message } = parserExtended(query);
  let result = useRef();
  if (!error) {
    result.current = message;
  }

  return (
    <div className={bulma.content}>
      {error && (
        <ErrorMessage className={bulma["has-text-danger"]}>
          {message}
        </ErrorMessage>
      )}
      <div className={bulma.field}>
        <div className={bulma.control}>
          <pre className="prettyrint lang-html linenums">
            <ol className="linenums">
              {result.current.split("\n").map((code) => {
                return (
                  <li key={code}>
                    <code>
                      <span className="tag">{code}</span>
                    </code>
                  </li>
                );
              })}
            </ol>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default ParsedQuery;

const ErrorMessage = styled.span``;
