//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../../utils/utils.js';
import PriceSelect from '../PriceSelect.jsx';

const priceOptions = utils.generatePriceOptions(0.90, 2.5, 0.05);

const LinePriceSelect = ({_changeLinePrice, linePrice}) => (
  <PriceSelect onPriceChange={_changeLinePrice} priceLabel="Rate per line" priceOptions={priceOptions} currentPrice={linePrice}/>
)

LinePriceSelect.propTypes = {
 _changeLinePrice: React.PropTypes.func.isRequired,
 linePrice: React.PropTypes.string.isRequired 
}


export default LinePriceSelect;
