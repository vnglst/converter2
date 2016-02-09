//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../../../utils/utils.js';
import PriceSelect from './PriceSelect.jsx';

const priceOptions = utils.generatePriceOptions(0.90, 2.5, 0.05);

export default (props) => (
  <PriceSelect {...props} onPriceChange={props._changeLinePrice} priceLabel="Rate per line" priceOptions={priceOptions} currentPrice={props.linePrice}/>
)
