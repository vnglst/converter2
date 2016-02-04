//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import LangSelect from './LangSelect.jsx';

export default class SourceLangSelect extends React.Component {
  render() {
    const currentLang = this.props.priceModel.sourceLang;
    return (
      <LangSelect {...this.props} onLangChange={this.props._changeSourceLang} langLabel="Source language" currentLang={currentLang} />
    )
  }
}