import React, { Component } from 'react';
import TitleEl from './TitleEl'
import AboutEl from './AboutEl'
import DarkModeEl from './DarkModeEl'

class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <TitleEl />
        {/* <AboutEl /> */}
        {/* <DarkModeEl /> */}
      </div>
    )
  }
}

export default TitleBar;