//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from './PriceOutput.jsx';

export default ({priceOutput}) => (
  <form className="form-horizontal">
    <PriceOutput priceStr={priceOutput.charPriceStr} priceLabel="Per character" />
    <PriceOutput priceStr={priceOutput.pagePriceStr} priceLabel="Per page" />
    <PriceOutput priceStr={priceOutput.hourPriceStr} priceLabel="Per hour" />
    <PriceOutput priceStr={priceOutput.dayPriceStr} priceLabel="Per day" />
  </form>
)
