import { useState } from 'react';
import '../src/styles/main.scss';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { initialContent } from './variables';

function App() {
  const [content, setContent] = useState(initialContent);
  
  return (
    <div className="App">
      <div id="previewer-wrapper">
        <Editor content={content} setContent={setContent}>
        </Editor>
        <Previewer content={content}>
        </Previewer>
      </div>
  </div>
  );
}

export default App;
