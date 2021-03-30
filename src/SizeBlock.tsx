import React, { Component } from 'react';

type MyProps = {
  hidden: boolean,
  size: string,
}

class SizeBlock extends Component<MyProps> {
  render() {
    let size = this.props.size + 'em';
    return(
      <div id='sizingPreview' className={this.props.hidden ? 'size-block hidden' : 'size-block'} style={{ width: size, height: size}} />
    )
  }
}

export default SizeBlock;