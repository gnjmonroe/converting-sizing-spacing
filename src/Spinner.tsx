import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import SpinUp from './SpinUp'
import SpinDown from './SpinDown'

type MyProps = {
  unit: string,
}

class Spinner extends React.Component<MyProps> {
  render() {
    const { unit } = this.props;

    return(
      <div className='spinner'>
        {/* <div className="spin-up" /> */}
        {/* <div className="spin-down" /> */}
        <SpinUp unit={unit} />
        <SpinDown unit={unit} />
      </div>
    )
  }
}

export default Spinner;