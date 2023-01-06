import { useState } from 'react';
import '../src/styles/App.scss';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const initialContent = `
# Header1
### Header3
`;

function App() {
  const [content, setContent] = useState(initialContent);

  return (
    <div className="App">
      <Editor content={content} setContent={setContent}>
      </Editor>
      <Previewer content={content}>
      </Previewer>
  </div>
  );
}

export default App;
