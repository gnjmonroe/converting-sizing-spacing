import * as React from "react";
// import * as ReactDOM from "react-dom";
import Label from './Label'
import UnitNum from './UnitNum'
import RangeSlider from './RangeSlider'

type MyProps = {
  unit: string;
  LabelText: string;
  updatePx?: React.KeyboardEventHandler<HTMLInputElement>;
  updateBs?: React.KeyboardEventHandler<HTMLInputElement>;
  combine?: React.KeyboardEventHandler<HTMLInputElement>;
  // onKeyUp?: object;
}

class BaseSize extends React.Component<MyProps> {

  render() {
    const {unit, LabelText, updateBs, combine} = this.props 
    
    return(
      <div className="base-size">
        <Label unit={unit} LabelText={LabelText} />
        <UnitNum unit={unit} ModuleType='base' convert={updateBs} />
        <RangeSlider unit={unit} combine={combine} />
      </div>
    )
  }
}

export default BaseSize;