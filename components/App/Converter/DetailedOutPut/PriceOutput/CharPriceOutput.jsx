//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../common/PriceOutput.jsx';

export default class CharPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per character';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderPrice} priceLabel={priceLabel} />
		)
	}
	renderPrice = () => {
		return this.props.priceModel.getCharPriceStr();
	}
}
