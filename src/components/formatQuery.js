import sqlFormatter from "sql-formatter";

function formatQuery(query) {
  return { code: sqlFormatter.format(query) };
}
export default formatQuery;
