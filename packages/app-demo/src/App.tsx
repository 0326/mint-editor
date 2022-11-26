import React from 'react';
import { MintEditor, Toolbar } from '@mint-editor/components';

import MintEditorLogo from './MintEditorLogo.svg';
import ReactLogo from './ReactLogo.svg';
import './App.css';


const App: React.FC = () => {
  // const [editor, setEditor] = useState();

  // useEffect(() => {
  //   setEditor({});
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={MintEditorLogo} className="mint-editor-logo" alt="MintEditor Logo" />
          <img src={ReactLogo} className="react-logo" alt="React Logo" />
        </div>
        <h1>
          <a
            className="App-link"
            href="https://github.com/0326/mint-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>MintEditor with React</strong>
          </a>
        </h1>
      </header>
      <div className="App-body">
        <Toolbar />
        <MintEditor />
        <div className="submit-button">发 送</div>
      </div>
    </div>
  );
};

export default App;
