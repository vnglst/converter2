//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from './PriceOutput.jsx';

export default class LinePriceOutput extends React.Component {
	render () {
		const priceLabel = 'Rate per line';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderLinePrice} priceLabel={priceLabel} />
		)
	}
	renderLinePrice = () => {
		return this.props.priceModel.getLinePriceStr();
	}
}
