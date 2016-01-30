//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from './PriceOutput.jsx';

export default class OutputBox extends React.Component {
  render() {
    return (
      <form className="form-horizontal well">
        <PriceOutput {...this.props} />
      </form>
    )
  }
}
