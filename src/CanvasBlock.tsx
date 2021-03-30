import React, { Component } from 'react';
import Tab from './Tab'
import Text from './Text'
import SizeBlock from './SizeBlock'
import SpaceBlockGroup from './SpaceBlockGroup'

type MyProps = {
  clickFnText: React.MouseEventHandler<HTMLElement>,
  clickFnSize: React.MouseEventHandler<HTMLElement>,
  clickFnSpac: React.MouseEventHandler<HTMLElement>,
  tabText: boolean,
  tabSize: boolean,
  tabSpac: boolean,
  contentText: boolean,
  contentSize: boolean,
  contentSpac: boolean,
  size: string,
}

class CanvasBlock extends Component<MyProps> {
  render() {
    return(
      <div className="canvas-block">
        <div className="tab-bar">
          <Tab category='Text' active={this.props.tabText} clickFn={this.props.clickFnText} />
          <Tab category='Sizing' active={this.props.tabSize} clickFn={this.props.clickFnSize} />
          <Tab category='Spacing' active={this.props.tabSpac} clickFn={this.props.clickFnSpac} />
        </div>
        <Text hidden={this.props.contentText} size={this.props.size} />
        <SizeBlock hidden={this.props.contentSize} size={this.props.size} />
        <SpaceBlockGroup hidden={this.props.contentSpac} size={this.props.size} />
      </div>
    )
  }
}

export default CanvasBlock;