import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import BaseSize from './BaseSize'
import UnitModule from './UnitModule'

type MyProps = {
  updateBs?: React.KeyboardEventHandler<HTMLInputElement>,
  combineBs?: React.KeyboardEventHandler<HTMLInputElement>,
  convertPx?: React.KeyboardEventHandler<HTMLInputElement>,
  convertEm?: React.KeyboardEventHandler<HTMLInputElement>,
  convertPt?: React.KeyboardEventHandler<HTMLInputElement>,
  convertPct?: React.KeyboardEventHandler<HTMLInputElement>,
  combinePx?: React.KeyboardEventHandler<HTMLInputElement>,
  combineEm?: React.KeyboardEventHandler<HTMLInputElement>,
  combinePt?: React.KeyboardEventHandler<HTMLInputElement>,
  combinePct?: React.KeyboardEventHandler<HTMLInputElement>,
}

class UnitBar extends React.Component<MyProps> {
  render() {
    return (
      <div className="unit-bar">
        <BaseSize unit='base' LabelText='base size' updateBs={this.props.updateBs} combine={this.props.combineBs} />
        <UnitModule unit='px' LabelText='PX' convert={this.props.convertPx} combine={this.props.combinePx} />
        <UnitModule unit='em' LabelText='EM' convert={this.props.convertEm} combine={this.props.combineEm} />
        <UnitModule unit='pt' LabelText='PT' convert={this.props.convertPt} combine={this.props.combinePt} />
        <UnitModule unit='pct' LabelText='%' convert={this.props.convertPct} combine={this.props.combinePct} />
      </div>
    )
  }
}

export default UnitBar;