import React from 'react';
import ReactLogo from './ReactLogo.svg';
import MintEditorLogo from './MintEditorLogo.svg';
import './App.css';

import { EditBox, Toolbar } from '@mint-editor/components';

const App: React.FC = () => {
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
        <EditBox />
        <div className="submit-button">发 送</div>
      </div>
    </div>
  );
};

export default App;
