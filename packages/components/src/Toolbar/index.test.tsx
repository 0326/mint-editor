import React from 'react';
import ReactDOM from 'react-dom';
import EditBox from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
