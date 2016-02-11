//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, {PropTypes} from 'react';
import PriceOutput from '../PriceOutput.jsx';

const MoreRatesPanel = ({charPriceStr, pagePriceStr, hourPriceStr, dayPriceStr}) => (
		<form className="form-horizontal">
				<PriceOutput priceStr={charPriceStr} priceLabel="Per character"/>
				<PriceOutput priceStr={pagePriceStr} priceLabel="Per page"/>
				<PriceOutput priceStr={hourPriceStr} priceLabel="Per hour"/>
				<PriceOutput priceStr={dayPriceStr} priceLabel="Per day"/>
		</form>
)

MoreRatesPanel.propTypes = {
  priceOutput: React.PropTypes.shape({
    charPriceStr: React.PropTypes.string.isRequired,
    pagePriceStr: React.PropTypes.string.isRequired,
    hourPriceStr: React.PropTypes.string.isRequired,
    dayPriceStr: React.PropTypes.string.isRequired
  })
}

export default MoreRatesPanel;
