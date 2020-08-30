import { lexer, parser } from "sql-parser";
import axios from "axios";

const parserExtended = (query) => {
  try {
    const tokens = lexer.tokenize(query);
    parser.parse(tokens);
    return Promise.resolve({
      data: [
        {
          error: false,
          message: "",
        },
      ],
    });
  } catch (err) {
    // send request to backend server for error details
    // get column, line, message

    return axios
      .post("http://localhost:4000/check", { code: query })
      .then((res) => {
        if (res.data.length) {
          res.data = res.data.map((data) => {
            const { message, line, column } = data;
            return { error: true, message, line, column };
          });
          return res;
        }
      })
      .catch(() => {
        return { data: [{ error: true, message: err.message }] };
      });
  }
};
export default parserExtended;
