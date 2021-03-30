import * as React from 'react';
// import * as ReactDOM from 'react-dom';

type MyProps = {
  unit: string,
  combine?: React.KeyboardEventHandler<HTMLInputElement>,
}

class RangeSlider extends React.Component<MyProps> {
  render() {
    const { unit, combine } = this.props;

    return(
      <input id={unit + 'Slider'} className="r-slider" type="range" min={0} max={100} onInput={combine} /> 
    )
  }
}

export default RangeSlider;