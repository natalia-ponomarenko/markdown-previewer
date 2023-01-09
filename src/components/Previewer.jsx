import { marked } from "marked";
import Prism from "prismjs";
import "../styles/components/Previewer.scss";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  },
});

// link from markup opens in separate window

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const createMarkUp = (val) => {
  return { __html: marked(val, { renderer: renderer }) };
};

function Previewer({ content }) {
  return (
    <div className="wrapper">
      <div className="heading">Previewer</div>
      <div id="preview" dangerouslySetInnerHTML={createMarkUp(content)} />
    </div>
  );
}

export default Previewer;
