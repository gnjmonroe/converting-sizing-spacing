import * as React from "react";
// import * as ReactDOM from "react-dom";
import { ReactComponent as SpinButtonDown } from './spin-button-down.svg';

type MyProps = {
  unit: string,
}

class SpinDown extends React.Component<MyProps> {
  render() {
    const {unit} = this.props;

    return(
      <SpinButtonDown id={unit + 'SpinButtonDown'} />
    )
  }
}

export default SpinDown;