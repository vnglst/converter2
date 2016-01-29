//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import LangSelect from './LangSelect.jsx';
import WordPriceSelect from './WordPriceSelect.jsx';
import LinePriceSelect from './LinePriceSelect.jsx';

export default class InputBox extends React.Component {
  render() {
    return (
      <form className="form-horizontal well">
        {this.getPriceSelect()}
        <LangSelect {...this.props} langLabel="Source language"/>
      </form>
    )
  }
  getPriceSelect = () => {
    const fromUnit = this.props.fromUnit;
    if (fromUnit === 'word') return <WordPriceSelect {...this.props} />
    if (fromUnit === 'line') return <LinePriceSelect {...this.props} />
  }
}
