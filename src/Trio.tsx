import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

interface Props {
  whole: number;
  show: number | number[];
}
interface State {
  columns: string;
}
export default class Trio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      columns: this.calcColums(props),
    };
  }
  componentWillReceiveProps (nextProps: Props) {
    this.setState({
      columns: this.calcColums(nextProps),
    });
  }

  calcColums = (props: Props) => {
    let arr: boolean[] = [];
    let returnStr: string = '';
    for (; arr.length < props.whole; ) {
      arr.push(false);
    } // arr = [0,0,0,0,0]

    if (Array.isArray(props.show)) { // ex. show={[0,3]}
      props.show.map((ele: number) => {
        if (ele < props.whole) {
          arr[ele] = true;
        }
      }); 
      // arr = [1,0,0,1,0]
    
    } else { // ex. show = {3}
      for (let i = 0; i < props.show; i++) {
        if (i < props.whole) {
          arr[i] = true;
        }
      }
      // arr = [0,0,0,1,0]
    } 

    arr.map((ele: boolean, index: number) => {
      if (index > 0) {
        returnStr = returnStr + ' ';
      }
      if (ele) {
        returnStr = returnStr + '1fr';
      } else {
        returnStr = returnStr + '0';
      }
    });

    return returnStr;
  }
  render() {
    const style = StyleSheet.create({
      trioBody: {
        display: 'grid',
        gridTemplateColumns: this.state.columns,
        transitionDuration: '.5s',
      },
    });
    return (
      <div className={css(style.trioBody)}>
        {this.props.children}
      </div>
    );
  }
}