import React, { Component } from 'react';

type MyProps = {
  clickFn: React.MouseEventHandler<HTMLElement>,
  category: string,
  active: boolean,
}

class Tab extends Component<MyProps> {
  render() {
    const clickFn = this.props.clickFn;

    return(
      <div id={this.props.category.toLocaleLowerCase() + 'Tab'} className={this.props.active ? 'tab active' : 'tab'} onClick={clickFn} >
        {this.props.category}
      </div>
    )
  }
}

export default Tab;