//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import WordPriceOutput from './WordPriceOutput.jsx';

export default class OutputBox extends React.Component {
  render() {
    return (
      <form className="form-horizontal well">
        <WordPriceOutput {...this.props} />
      </form>
    )
  }
}
