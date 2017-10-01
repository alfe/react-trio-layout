import React, { Component } from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

export default class Trio extends Component {
  static propTypes = {
    shift: PropTypes.bool, // false: show 1-2, true: show 2-3
    shiftTime: PropTypes.number, // sec
    style: stylePropType, // container style object
    children: PropTypes.node, // children react element node include 3 <div>s
  }

  static defaultProps = {
    shift: false,
    shiftTime: 0.3, // sec
    style: {},
    children: null,
  }

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      shift: props.shift
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    if (!!nextProps && !!nextProps.shift) {
      this.setState({
        shift: nextProps.shift || this.state.shift
      })
    }
  }

  render() {
    const { style, children } = this.props;
    if (this.state.shift) {
      return (
        <div style={{display: 'flex', ...style}}>
          <div
            style={{width: '3%', transitionDuration: `${this.props.shiftTime}s` }}
            onClick={() => this.setState({shift: false})}
          >
            {(children.length > 3) 
              ? children[3] 
              : <div style={{height: '100%', marginTop: '45vh', textAlign: 'center'}}>▶</div> 
            }
          </div>
          <div style={{width: '50%', transitionDuration: `${this.props.shiftTime}s` }}>{children[1]}</div>
          <div style={{width: '47%', transitionDuration: `${this.props.shiftTime}s` }}>{children[2]}</div>
        </div>
      )
    } else {
      return (
        <div style={{display: 'flex', ...style}}>
          <div style={{width: '50%', transitionDuration: `${this.props.shiftTime}s` }}>{children[0]}</div>
          <div style={{width: '50%', transitionDuration: `${this.props.shiftTime}s` }}>{children[1]}</div>
          <div style={{width: 0, transitionDuration: `${this.props.shiftTime}s` }} />
        </div>
      )
    }
  }
}
