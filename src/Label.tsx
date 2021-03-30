import React, { Component } from 'react';

type MyProps = {
  LabelText: string,
  unit: string
};

class Label extends Component<MyProps> {
  render() {
    return(
      <h3>{this.props.LabelText}</h3>
    )
  }
}

export default Label;