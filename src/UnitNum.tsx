import * as React from 'react';

type MyProps = {
  ModuleType: string,
  unit: string,
  convert?: React.KeyboardEventHandler<HTMLInputElement>,
  // onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
};

class UnitNum extends React.Component<MyProps> {
  render() {
    const { unit, ModuleType, convert } = this.props;

    return(
      <>
        <input id={unit + 'Num'} className={"unit-num " + ModuleType} type="number" placeholder={unit} min={0} max={10000} onKeyUp={convert} />
      </>
    )
  }
}

export default UnitNum;