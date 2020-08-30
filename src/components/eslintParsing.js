import linterModule from "eslint/lib/linter/linter";

const linter = new linterModule.Linter();
const rules = linter.getRules();
const options = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {},
  },
  rules: [...rules.entries()].reduce((result, [ruleId, rule]) => {
    if (rule.meta.docs.recommended) {
      result[ruleId] = 2;
    }
    return result;
  }, {}),
  env: {},
};

export default () => {
  try {
    const { messages, output } = linter.verifyAndFix("var foo=bar;", options, {
      fix: false,
    });
    let fatalMessage;

    if (messages && messages.length > 0 && messages[0].fatal) {
      fatalMessage = messages[0];
    }
    return {
      messages,
      output,
      fatalMessage,
    };
  } catch (error) {
    return {
      messages: [],
      output: "var foo=bar;",
      error,
    };
  }
};
