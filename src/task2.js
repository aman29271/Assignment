import React, { useState, useEffect } from "react";

import bulma from "./scss/bulma.module.scss";
import Editor from "./components/editor";
import formatQuery from "./components/formatQuery";
import parserExtended from "./components/parser";

const Task2 = () => {
  const [query, setQuery] = useState("");
  const [formattedQuery, setFormattedQuery] = useState("");
  const [annotation, setAnnotation] = useState([]);

  const format = () => {
    setFormattedQuery(formatQuery(query).code);
  };
  const handleValidate = () => {
    format();
    parserExtended(query)
      .then((res) => {
        const { data } = res;
        let newAnnotation = [];
        data.map(({ error, message, line, column }) => {
          if (error) {
            newAnnotation.push({
              row: line - 1,
              column: column - 1,
              text: message,
              type: "error",
            });
          } else {
            newAnnotation = [];
          }
        });
        setAnnotation(newAnnotation);
      })
      .catch((err) => {
        console.log(err);
        const { message } = err.data[0];
        setAnnotation({ row: 0, column: 0, text: message, type: "error" });
      });
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
  return (
    <section className={bulma["section"]}>
      <div className={bulma["container"]}>
        <p
          className={`${bulma.title} ${bulma["is-spaced"]} ${bulma["has-text-centered"]}`}
        >
          SQL Validator
        </p>

        <div className={bulma.columns}>
          <div
            className={`${bulma.column} ${bulma["is-8-desktop"]} ${bulma["is-offset-2-desktop"]}`}
          >
            <div className={`${bulma["field"]} `}>
              <label className={bulma["label"]}>Query</label>
              <div className={bulma.control}>
                <Editor
                  setQuery={setQuery}
                  formattedQuery={formattedQuery}
                  annotations={annotation}
                />
              </div>
            </div>
            <div className={`${bulma["field"]} `}>
              <div className={bulma.control}>
                <div className={bulma.buttons}>
                  <button
                    className={`${bulma.button} ${bulma["is-link"]}`}
                    onClick={handleValidate}
                  >
                    Validate
                  </button>
                  <button
                    className={`${bulma.button} ${bulma["is-primary"]}`}
                    onClick={format}
                  >
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
