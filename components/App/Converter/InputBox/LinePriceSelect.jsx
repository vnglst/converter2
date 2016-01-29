//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../../utils/utils.js';
import PriceSelect from './PriceSelect.jsx';

export default class LinePriceSelect extends React.Component {
  render() {
    const priceOptions = utils.generatePriceOptions(0.90, 2.5, 0.05);
    const priceLabel = 'Rate per line';
    const currentPrice = this.props.currentPrice;
    return (
      <PriceSelect {...this.props} priceLabel={priceLabel} priceOptions={priceOptions} />
    )
  }
}
