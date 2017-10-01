import React from 'react';
import { storiesOf } from '@storybook/react';
import Trio from '../src/Trio';

storiesOf('<Trio /> Examples', module)
  .add('3 divs: shift: false', () => {
    return (
    <Trio shift={false}>
      <div style={{width: '100%', height: '100vh', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '100vh', background: 'red'}}>3</div>
    </Trio>
  )})
  .add('3 divs: shift: true', () => {
    return (
    <Trio shift={true}>
      <div style={{width: '100%', height: '100vh', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '100vh', background: 'red'}}>3</div>
    </Trio>
  )})
  .add('2divs', () => (
    <Trio>
      <div style={{width: '100%', height: '100vh', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}>2</div>
    </Trio>
  ))
  .add('4divs for unshift button', () => (
    <Trio shift={true}>
      <div style={{width: '100%', height: '100vh', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '100vh', background: 'red'}}>3</div>
      <div style={{width: '100%', height: '100vh', background: 'black', color: 'white'}}>4</div>
    </Trio>
  ))
  .add('slow moving', () => (
    <Trio shiftTime={5} shift={true}>
      <div style={{width: '100%', height: '100vh', background: 'green'}}>1</div>
      <div style={{width: '100%', height: '100vh', background: 'blue'}}>2</div>
      <div style={{width: '100%', height: '100vh', background: 'red'}}>3</div>
    </Trio>
  ))

