//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from './PriceOutput.jsx';

export default class PagePriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per page';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderPrice} priceLabel={priceLabel} />
		)
	}
	renderPrice = () => {
		return this.props.priceModel.getPagePriceStr();
	}
}
