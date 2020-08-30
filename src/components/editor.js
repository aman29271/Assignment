import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";

const Editor = ({ setQuery, formattedQuery, annotations }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setQuery(e);
    setValue(e);
  };
  const onLoad = () => {};
  useEffect(() => {
    if (formattedQuery !== "") {
      setValue(formattedQuery);
    }
  }, [formattedQuery]);

  return (
    <AceEditor
      placeholder="Type your query"
      mode="mysql"
      theme="github"
      name="sql-editor"
      height="300px"
      onLoad={onLoad}
      onChange={onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={`${value}`}
      annotations={annotations}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};
export default Editor;
