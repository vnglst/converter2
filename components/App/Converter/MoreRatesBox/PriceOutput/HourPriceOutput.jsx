//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default class HourPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per hour';
		const hourPriceStr = this.props.priceOutput.hourPriceStr;
		return(
			<PriceOutput {...this.props} priceStr={hourPriceStr} priceLabel={priceLabel} />
		)
	}
}
