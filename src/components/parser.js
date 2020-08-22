import { lexer, parser } from "sql-parser";

const parserExtended = (query) => {
  try {
    const tokens = lexer.tokenize(query);
    return { message: parser.parse(tokens).toString(), error: false };
  } catch (err) {
    return { error: true, message: err.message };
  }
};
export default parserExtended;
