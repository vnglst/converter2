//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as utils from '../../utils/utils.js';
import PriceSelect from '../PriceSelect.jsx';

const priceOptions = utils.generatePriceOptions(0.10, 0.45, 0.01);

const WordPriceSelect = ({_changeWordPrice, wordPrice}) => (
  <PriceSelect onPriceChange={_changeWordPrice} priceLabel="Rate per word" priceOptions={priceOptions} currentPrice={wordPrice}/>
)

WordPriceSelect.propTypes = {
 _changeWordPrice: React.PropTypes.func.isRequired,
 wordPrice: React.PropTypes.string.isRequired
}

export default WordPriceSelect;
