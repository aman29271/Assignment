import React, { useState } from "react";

import bulma from "./scss/bulma.module.scss";
import ShowParsedQuery from "./components/ShowParsedQuery";

const Task2 = () => {
  const [query, setQuery] = useState("");
  const [parsing, setParsing] = useState(false);
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
            <div className={`${bulma["field"]} ${bulma["is-horizontal"]}`}>
              <div className={`${bulma["field-label"]} ${bulma["is-normal"]}`}>
                <label className={bulma["label"]}>Query</label>
              </div>
              <div className={bulma["field-body"]}>
                <div className={bulma.field}>
                  <div className={bulma.control}>
                    <textarea
                      className={bulma.textarea}
                      placeholder="Enter Your Query"
                      onChange={(e) => {
                        setQuery(e.target.value);
                      }}
                      value={query}
                    />
                  </div>
                </div>
                <div className={bulma.field}>
                  <div className={bulma.control}>
                    <button
                      className={`${bulma.button} ${bulma["is-link"]}`}
                      onClick={() => {
                        setParsing(true);
                      }}
                    >
                      Validate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            {parsing && <ShowParsedQuery query={query} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Task2;
