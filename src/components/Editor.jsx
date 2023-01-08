import '../styles/components/Editor.scss';

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
    ></textarea>
  );
}

export default Editor;
