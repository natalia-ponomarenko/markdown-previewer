import { useState, useEffect } from "react";
import "../src/styles/main.scss";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { defaultContent } from "./variables";

function App() {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem("content");
    const initialValue = saved;
    return initialValue || defaultContent;
  });

  useEffect(() => {
    localStorage.setItem("content", content);
  }, [content]);

  return (
    <div className="App">
      <div id="previewer-wrapper">
        <Editor content={content} setContent={setContent} />
        <Previewer content={content} />
      </div>
    </div>
  );
}

export default App;
