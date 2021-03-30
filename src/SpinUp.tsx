import * as React from "react";
// import * as ReactDOM from "react-dom";
import { ReactComponent as SpinButtonUp } from './spin-button-up.svg';

type MyProps = {
  unit: string,
}

class SpinUp extends React.Component<MyProps> {
  render() {
    const { unit } = this.props;

    return(
      <>
        <SpinButtonUp id={unit + 'SpinButtonUp'} />
      </>
    )
  }
}

export default SpinUp;