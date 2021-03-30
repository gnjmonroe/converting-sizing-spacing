import * as React from 'react';
import './App.css';
import TitleBar from "./TitleBar";
import UnitBar from './UnitBar';
import CanvasBlock from './CanvasBlock';

// type MyProps = {
//   unit: string,
//   LabelText: string,
//   updatePx: object,
//   updateEm: object,
//   updatePt: object,
//   updatePct: object,
// }

type MyState = {
  baseSize: number | string,
  pxValue: number | string,
  emValue: number | string,
  ptValue: number | string,
  pctValue: number | string,
}

class App extends React.Component {
  state = {
    baseSize: 16,
    pxValue: "",
    emValue: "",
    ptValue: "",
    pctValue: "",
    tabTextActive: true,
    tabSizeActive: false,
    tabSpacActive: false,
    contentTextHidden: false,
    contentSizeHidden: true,
    contentSpacHidden: true,
  }

  updateBaseSize = () => {
    const baseSize = document.getElementById('baseNum') as HTMLInputElement;
    let bs = Number(baseSize.value);
    let pxNum = document.getElementById('pxNum') as HTMLInputElement;
    let px = pxNum.value;

    if (baseSize.value !== '' && px === '') {
      this.setState(() => {
        return {
          baseSize: bs,
        }
      });
    } else if (baseSize.value !== '' && px !== '') {
      this.setState(() => {
        return {
          baseSize: bs,
          emValue: Number(px) / bs,
          pctValue: Number(px) / bs * 100,
        }
      })
    } else {
      this.setState(() => {
        return {
          baseSize: 16,
        }
      })
    }
  }
  combineBs = () => {
    const bsInput = document.getElementById('baseNum') as HTMLInputElement;
    const bsSlider = document.getElementById('baseSlider') as HTMLInputElement;
    let pxNum = document.getElementById('pxNum') as HTMLInputElement;
    let px = pxNum.value;
    let ptNum = document.getElementById('ptNum') as HTMLInputElement;
    let pt = ptNum.value;
    let bsS = Number(bsSlider.value);
    if (bsInput !== null && bsSlider !== null) {
      if (px === '' && pt === '') {
        console.log('pt and px null')
        this.setState(() => {
          return {
            pxValue: 16,
            ptValue: 12,
          }
        })
      }
      this.setState(() => {
        return {
          baseSize: bsS,
          emValue: Number(px) / bsS,
          pctValue: Number(px) / bsS * 100,
        }
      })
    } 
  }
  convertPx = () => {
    const bs = this.state.baseSize;
    const px = document.getElementById('pxNum') as HTMLInputElement;
    const pxV = Number(px.value);
    if (px !== null) {
      this.setState(() => {
        return {
          pxValue: pxV,
          emValue: pxV / bs,
          ptValue: pxV * 75 / 100,
          pctValue: pxV / bs * 100,
        }
      })
      console.log(this.state);
    } else {
      this.setState(() => {
        return {
          pxValue: "",
          emValue: "",
          ptValue: "",
          pctValue: "",
        }
      })
    }
  }
  combinePx = () => {
    const bs = this.state.baseSize;
    const pxInput = document.getElementById('pxNum') as HTMLInputElement;
    const pxSlider = document.getElementById('pxSlider') as HTMLInputElement;
    const pxV = Number(pxSlider.value);
    if (pxInput !== null && pxSlider !== null) {
      this.setState(() => {
        return {
          pxValue: pxV,
          emValue: pxV / bs,
          ptValue: pxV * 75 / 100,
          pctValue: pxV / bs * 100,
        }
      })
    }
  }
  convertEm = () => {
    const bs = this.state.baseSize;
    const em = document.getElementById('emNum') as HTMLInputElement;
    const emV = Number(em.value);
    if (em !== null) {
      this.setState(() => {
        return {
          pxValue: emV * bs,
          emValue: emV,
          ptValue: emV * bs * 75 / 100,
          pctValue: emV * 100,
        } 
      }) 
    } else {
      this.setState(() => {
        return {
          pxValue: "",
          emValue: "",
          ptValue: "",
          pctValue: "",
        }
      })
    }
  }
  combineEm = () => {
    const bs = this.state.baseSize;
    const emInput = document.getElementById('emNum') as HTMLInputElement;
    const emSlider = document.getElementById('emSlider') as HTMLInputElement;
    const emV = Number(emSlider.value);
    if (emInput !== null && emSlider !== null) {
      this.setState(() => {
        return {
          pxValue: emV * bs,
          emValue: emV,
          ptValue: emV * bs * 75 / 100,
          pctValue: emV * 100,
        } 
      })
    }
  }
  convertPt = () => {
    const bs = this.state.baseSize;
    const pt = document.getElementById('ptNum') as HTMLInputElement;
    const ptV = Number(pt.value);
    if (pt !== null) {
      this.setState(() => {
        return {
          pxValue: ptV / 75 * 100,
          emValue: ptV / 75 * 100 / bs,
          ptValue: ptV,
          pctValue: ptV / 75 * 100 / bs * 100,
        } 
      }) 
    } else {
      this.setState(() => {
        return {
          pxValue: "",
          emValue: "",
          ptValue: "",
          pctValue: "",
        }
      })
    }
  }
  combinePt = () => {
    const bs = this.state.baseSize;
    const ptInput = document.getElementById('ptNum') as HTMLInputElement;
    const ptSlider = document.getElementById('ptSlider') as HTMLInputElement;
    const ptV = Number(ptSlider.value);
    if (ptInput !== null && ptSlider !== null) {
      this.setState(() => {
        return {
        pxValue: ptV / 75 * 100,
        emValue: ptV / 75 * 100 / bs,
        ptValue: ptV,
        pctValue: ptV / 75 * 100 / bs * 100,
        }
      })
    } 
  }
  convertPct = () => {
    const bs = this.state.baseSize;
    const pct = document.getElementById('pctNum') as HTMLInputElement;
    const pctV = Number(pct.value);
    if (pct !== null) {
      this.setState(() => {
        return {
          pxValue: pctV / 100 * bs,
          emValue: pctV / 100,
          ptValue: pctV / 100 * bs * 75 / 100,
          pctValue: pctV,
        } 
      }) 
    } else {
      this.setState(() => {
        return {
          pxValue: "",
          emValue: "",
          ptValue: "",
          pctValue: "",
        }
      })
    }
  }
  combinePct = () => {
    const bs = this.state.baseSize;
    const pctInput = document.getElementById('pctNum') as HTMLInputElement;
    const pctSlider = document.getElementById('pctSlider') as HTMLInputElement;
    const pctV = Number(pctSlider.value);
    if (pctInput !== null && pctSlider !== null) {
      this.setState(() => {
        return {
          pxValue: pctV / 100 * bs,
          emValue: pctV / 100,
          ptValue: pctV / 100 * bs * 75 / 100,
          pctValue: pctV,
        } 
      })
    }
  }

  clickTabText = () => {
    const textGrab = document.getElementById('textTab') as HTMLElement;
    const sizingGrab = document.getElementById('sizingTab') as HTMLElement;
    const spacingGrab = document.getElementById('spacingTab') as HTMLElement;
    const textPreview = document.getElementById("textPreview") as HTMLElement;
    const sizingPreview = document.getElementById("sizingPreview") as HTMLElement;
    const spacingPreview = document.getElementById("spacingPreview") as HTMLElement;
    if (textGrab.className === 'tab' && textPreview.className === 'text hidden') {
      textGrab.className = 'tab active';
      sizingGrab.className = 'tab';
      spacingGrab.className = 'tab';
      textPreview.className = 'text';
      sizingPreview.className = 'size-block hidden';
      spacingPreview.className = 'space-block hidden';
    }
  }
  clickTabSize = () => {
    const textGrab = document.getElementById('textTab') as HTMLElement;
    const sizingGrab = document.getElementById('sizingTab') as HTMLElement;
    const spacingGrab = document.getElementById('spacingTab') as HTMLElement;
    const textPreview = document.getElementById("textPreview") as HTMLElement;
    const sizingPreview = document.getElementById("sizingPreview") as HTMLElement;
    const spacingPreview = document.getElementById("spacingPreview") as HTMLElement;
    if (sizingGrab.className === 'tab' && sizingPreview.className === 'size-block hidden') {
      textGrab.className = 'tab';
      sizingGrab.className = 'tab active';
      spacingGrab.className = 'tab';
      textPreview.className = 'text hidden';
      sizingPreview.className = 'size-block';
      spacingPreview.className = 'space-block hidden';
    }
  }
  clickTabSpac = () => {
    const textGrab = document.getElementById('textTab') as HTMLElement;
    const sizingGrab = document.getElementById('sizingTab') as HTMLElement;
    const spacingGrab = document.getElementById('spacingTab') as HTMLElement;
    const textPreview = document.getElementById("textPreview") as HTMLElement;
    const sizingPreview = document.getElementById("sizingPreview") as HTMLElement;
    const spacingPreview = document.getElementById("spacingPreview") as HTMLElement;
    if (spacingGrab.className === 'tab' && spacingPreview.className === 'space-block hidden') {
      textGrab.className = 'tab';
      sizingGrab.className = 'tab';
      spacingGrab.className = 'tab active';
      textPreview.className = 'text hidden';
      sizingPreview.className = 'size-block hidden';
      spacingPreview.className = 'space-block';
    }
  }

  componentDidUpdate(prevState: MyState) {
    // grab input values
    let baseInput = document.getElementById("baseNum") as HTMLInputElement;
    let pxInput = document.getElementById("pxNum") as HTMLInputElement;
    let emInput = document.getElementById("emNum") as HTMLInputElement;
    let ptInput = document.getElementById("ptNum") as HTMLInputElement;
    let pctInput = document.getElementById("pctNum") as HTMLInputElement;

    // grab range slider values
    let baseSlider = document.getElementById("baseSlider") as HTMLInputElement;
    let pxSlider = document.getElementById("pxSlider") as HTMLInputElement;
    let emSlider = document.getElementById("emSlider") as HTMLInputElement;
    let ptSlider = document.getElementById("ptSlider") as HTMLInputElement;
    let pctSlider = document.getElementById("pctSlider") as HTMLInputElement;

    if (prevState.pxValue !== this.state.pxValue) {
      // update for unit conversions
      baseInput.value = String(this.state.baseSize);
      pxInput.value = Number(this.state.pxValue).toFixed(0);
      emInput.value = Number(this.state.emValue).toFixed(3);
      ptInput.value = Number(this.state.ptValue).toFixed(0);
      pctInput.value = Number(this.state.pctValue).toFixed(1);
      baseSlider.value = String(this.state.baseSize);
      pxSlider.value = this.state.pxValue;
      emSlider.value = this.state.emValue;
      ptSlider.value = this.state.ptValue;
      pctSlider.value = this.state.pctValue;
    }
  }

  render() {
    return (
      <div className="app">
        <TitleBar />
        <div className="content">
          <UnitBar
            updateBs={this.updateBaseSize}
            combineBs={this.combineBs}
            convertPx={this.convertPx}
            combinePx={this.combinePx}
            convertEm={this.convertEm}
            combineEm={this.combineEm}
            convertPt={this.convertPt}
            combinePt={this.combinePt}
            convertPct={this.convertPct}
            combinePct={this.combinePct}
          />
          <CanvasBlock
            clickFnText = {this.clickTabText}
            clickFnSize = {this.clickTabSize}
            clickFnSpac = {this.clickTabSpac}
            tabText = {this.state.tabTextActive}
            tabSize = {this.state.tabSizeActive}
            tabSpac = {this.state.tabSpacActive}
            contentText = {this.state.contentTextHidden}
            contentSize = {this.state.contentSizeHidden}
            contentSpac = {this.state.contentSpacHidden}
            size = {this.state.emValue}
          />
        </div>
      </div>
    );
  }
}

export default App;
