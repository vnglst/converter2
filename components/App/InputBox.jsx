//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import LangSelect from './LangSelect.jsx';
import PriceSelect from './PriceSelect.jsx';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="form-horizontal well">
        <PriceSelect {...this.props} />
        <LangSelect {...this.props} langLabel="Source language"/>
      </form>
    )
  }
}
