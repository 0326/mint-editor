import React from 'react';
import ReactDOM from 'react-dom';
import { MintEditor } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MintEditor />, div);
  ReactDOM.unmountComponentAtNode(div);
});
