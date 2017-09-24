import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Trio from './Trio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Trio show={[0, 1]} whole={4}>
      <div style={{background: 'red'}}/>
      <div style={{background: 'blue'}}/>
      <div style={{background: 'green'}}/>
      <div style={{background: 'yellow'}}/>
    </Trio>
  , div);
});
