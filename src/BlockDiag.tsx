import React, { Component } from 'react';

type MyProps = {
  size: string,
}

class BlockDiag extends Component<MyProps> {
  render() {
    let sqSize = (3 + Math.sqrt(Math.pow(Number(this.props.size), 2) / 2)) + 'em';
    return(
      <div className='block-diag' style={{ top: sqSize, left: sqSize}} />
    )
  }
}

export default BlockDiag;