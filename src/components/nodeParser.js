import { Parser } from "flora-sql-parser";

const parser = new Parser();
export default (code) => {
  try {
    parser.parse(code);
    return { error: false, msg: "" };
  } catch (error) {
    const {
      location: {
        start: { line, column },
      },
      message,
    } = error;
    return { error: true, line, column, message };
  }
};
