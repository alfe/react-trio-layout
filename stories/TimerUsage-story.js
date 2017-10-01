import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Trio from '../src/Trio';

const Countdown = (props, context) => {
  const d = new Date(context.remaining);
  const { seconds, milliseconds } = {
    seconds: d.getUTCSeconds(),
    milliseconds: d.getUTCMilliseconds(),
  };
  return (
    <span>{`${seconds}.${milliseconds}`}</span>
  );
};

Countdown.contextTypes = {
  remaining: PropTypes.number,
};

const markdownCountdown = `
----

## Usage

Please set three child presentational components and toggle state .

### Child component example

~~~jsx
class Trio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: false
    };
  }
  
  handleShift = () => this.setState({shift: !this.state.shift})

  return ( // please set three element
    <Trio shift={this.state.shift}> // and toggle state
      <div style={{width: '100%', height: '20px', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '20px', background: 'blue'}}>
        <button onClick={handleShift}>open 3</button>
      </div>
      <div style={{width: '100%', height: '20px', background: 'red'}}>3</div>
    </Trio>
  );
};

~~~
`;

const infoOptions = { inline: true, propTables: [Trio] };
storiesOf('<Trio /> Usage', module)
  .addWithInfo('basic usage', markdownCountdown, () => (
    <Trio shift={false}>
      <div style={{width: '100%', height: '20px', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '20px', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '20px', background: 'red'}}>3</div>
    </Trio>
  ), infoOptions)
  .addWithInfo('props: shiftTime (sec)', markdownCountdown, () => (
    <Trio shift={false} shiftTime={5}>
      <div style={{width: '100%', height: '20px', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '20px', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '20px', background: 'red'}}>3</div>
    </Trio>
  ), infoOptions)
  .addWithInfo('props: style (container <div>)', markdownCountdown, () => (
    <Trio shift={false} style={{ backgroundColor: '#333', padding: 24 }}>
      <div style={{width: '100%', height: '20px', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '20px', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '20px', background: 'red'}}>3</div>
    </Trio>
  ), infoOptions)
  .addWithInfo('custom unshift button: set 4th div', markdownCountdown, () => (
    <Trio shift={false}>
      <div style={{width: '100%', height: '20px', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '20px', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '20px', background: 'red'}}>3</div>
      <div className="returnBtn"> → </div>
    </Trio>
  ), infoOptions);
