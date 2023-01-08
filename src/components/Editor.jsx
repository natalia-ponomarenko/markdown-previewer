import "../styles/components/Editor.scss";

function Editor({ content, setContent }) {
  const handleContentChange = (event) => {
    const content = event.target.value;
    setContent(content);
  };

  return (
    <div className="wrapper">
      <div className="toolbar">Editor</div>
      <textarea
        id="editor"
        value={content}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
}

export default Editor;
