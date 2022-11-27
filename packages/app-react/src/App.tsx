import React, { useState } from 'react';
import { MintEditor } from '@mint-editor/components';
import { Editor } from '@mint-editor/core';
import MintEditorLogo from './MintEditorLogo.svg';
import ReactLogo from './ReactLogo.svg';
import './App.scss';


const App: React.FC = () => {
  const [editor, setEditor] = useState<Editor>();

  const sendMessage = () => {
    const content = editor?.getContent();
    alert(JSON.stringify(content, null, 2));
  }

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
        <MintEditor onInit={(e) => { setEditor(e); }} />
        <div className="submit-button" onClick={sendMessage}>发 送</div>
      </div>
    </div>
  );
};

export default App;
