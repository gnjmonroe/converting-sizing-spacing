import React, { Component } from 'react';

type MyProps = {
  size: string,
}

class BlockHori extends Component<MyProps> {
  render() {
    let size = (3 + this.props.size) + 'em';
    return(
      <div className='block-hori' style={{ left: size }} />
    )
  }
}

export default BlockHori;