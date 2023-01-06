function Editor({ content, setContent }) {

  const handleContentChange = (event) => {
    const content = event.target.value;
    setContent(content);
  };

  return (
    <textarea
      id="editor"
      value={content}
      onChange={handleContentChange}
      cols="30"
      rows="10"
    ></textarea>
  );
}

export default Editor;
