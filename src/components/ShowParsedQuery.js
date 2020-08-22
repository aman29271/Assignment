import React from "react";

import bulma from "../scss/bulma.module.scss";
import ParsedQuery from "./ParsedQuery";
const ShowParsedQuery = ({ query }) => {
  return (
    <>
      <p className={`${bulma.title} ${bulma['is-5']}`}>Parsed Query</p>
      <ParsedQuery query={query} />
    </>
  );
};
export default ShowParsedQuery;
