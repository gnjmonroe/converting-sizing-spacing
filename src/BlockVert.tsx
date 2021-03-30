import React, { Component } from 'react';

type MyProps = {
  size: string,
}

class BlockVert extends Component<MyProps> {
  render() {
    let size = (3 + this.props.size) + 'em';
    return(
      <div className='block-vert' style={{ top: size }} />
    )
  }
}

export default BlockVert;