import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import Editor from "./components/editor";
import formatQuery from "./components/formatQuery";
import nodeParser from "./components/nodeParser";

const Task2 = () => {
  const [query, setQuery] = useState("");
  const [formattedQuery, setFormattedQuery] = useState("");
  const [annotation, setAnnotation] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const format = () => {
    setFormattedQuery(formatQuery(query).code);
  };
  const handleValidate = () => {
    // format();
    setIsFirstTime(false);
    const { error, message, line, column } = nodeParser(query);
    if (error) {
      setAnnotation([
        { text: message, row: line - 1, column: column - 1, type: "error" },
      ]);
    } else {
      setAnnotation([]);
    }
  };
  useEffect(() => {
    if (formattedQuery !== "") {
      const timer = setTimeout(() => {
        setFormattedQuery("");
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [formattedQuery]);

  useEffect(() => {
    if (!isFirstTime) {
      if (query != "") {
        handleValidate();
      }
    }
  }, [isFirstTime, query]);

  return (
    <section className="section">
      <div className="container">
        <p className="title is-spaced has-text-centered">SQL Validator</p>

        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop">
            <div className="field">
              <label className="label">Query</label>
              <div className="control">
                <Editor
                  setQuery={setQuery}
                  formattedQuery={formattedQuery}
                  annotations={annotation}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div className="buttons">
                  <button className="button is-link" onClick={handleValidate}>
                    Validate
                  </button>
                  <button className="button is-primary" onClick={format}>
                    Format
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Task2;
