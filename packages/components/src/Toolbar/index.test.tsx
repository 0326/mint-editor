import React from 'react';
import ReactDOM from 'react-dom';
import { Toolbar } from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toolbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
