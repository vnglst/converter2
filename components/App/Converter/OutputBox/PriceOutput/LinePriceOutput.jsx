//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../common/PriceOutput.jsx';

export default class LinePriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per line';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderPrice} priceLabel={priceLabel} />
		)
	}
	renderPrice = () => {
		return this.props.priceModel.getLinePriceStr();
	}
}
