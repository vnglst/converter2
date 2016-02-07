//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import AssumptionsInput from '../AssumptionsInput.jsx';

export default class MoreRatesBox extends React.Component {
  render() {
		const charsPerLine = this.props.priceOutput.charsPerLine;
    return (
      <form className="form-horizontal">
        <AssumptionsInput {...this.props} priceStr={charsPerLine} priceLabel="Chars per line" />
      </form>
    )
  }
}
