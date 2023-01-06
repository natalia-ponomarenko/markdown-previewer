import { marked } from "marked";

const createMarkUp = (val) => {
  return { __html: marked(val) }
}

function Previewer({ content }) {
  console.log({ __html: marked(content) })

  return (
    <div id="preview" dangerouslySetInnerHTML={createMarkUp(content)}></div>
  );
}

export default Previewer;