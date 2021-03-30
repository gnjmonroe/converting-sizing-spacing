import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import Label from './Label'
import UnitNum from './UnitNum'
import Spinner from './Spinner'
import RangeSlider from './RangeSlider'

type MyProps = {
  LabelText: string,
  unit: string,
  convert?: React.KeyboardEventHandler<HTMLInputElement>,
  combine?: React.KeyboardEventHandler<HTMLInputElement>,
};

class UnitModule extends React.Component<MyProps> {
  render() {
    const {unit, LabelText, convert, combine} = this.props;

    return(
      <div className="unit-module">
        <Label unit={unit} LabelText={LabelText} />
        <UnitNum unit={unit} ModuleType='unit' convert={convert} />
        {/* <Spinner unit={unit} /> */}
        <RangeSlider unit={unit} combine={combine} />
      </div>
    )
  }
}

export default UnitModule;