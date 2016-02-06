//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../../../utils/utils.js';
import PriceSelect from './PriceSelect.jsx';

export default class WordPriceSelect extends React.Component {
  render() {
    const priceOptions = utils.generatePriceOptions(0.10, 0.45, 0.01);
    const priceLabel = 'Rate per word';
    const currentPrice = this.props.wordPrice;
    return (
      <PriceSelect {...this.props} onPriceChange={this.props._changeWordPrice} priceLabel={priceLabel} priceOptions={priceOptions} currentPrice={currentPrice}/>
    )
  }
}
