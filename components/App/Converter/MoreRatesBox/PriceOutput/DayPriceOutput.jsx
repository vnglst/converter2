//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default class DayPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per day';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderPrice} priceLabel={priceLabel} />
		)
	}
	renderPrice = () => {
		return this.props.priceModel.getDayPriceStr();
	}
}
