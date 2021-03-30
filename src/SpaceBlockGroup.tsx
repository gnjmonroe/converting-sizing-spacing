import React, { Component } from 'react';
import BlockBase from './BlockBase';
import BlockHori from './BlockHori';
import BlockVert from './BlockVert';
import BlockDiag from './BlockDiag';

type MyProps = {
  hidden: boolean,
  size: string,
}

class SpaceBlockGroup extends Component<MyProps> {
  render() {
    return(
      <div id='spacingPreview' className={this.props.hidden ? 'space-block hidden' : 'space-block'}>
        <BlockBase />
        <BlockHori size={this.props.size} />
        <BlockVert size={this.props.size} />
        <BlockDiag size={this.props.size} />
      </div>
    )
  }
}

export default SpaceBlockGroup;