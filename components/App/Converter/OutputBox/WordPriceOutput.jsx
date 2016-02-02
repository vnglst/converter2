//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceModel from '../../utils/PriceModel.js';
import PriceOutput from './PriceOutput.jsx';

export default class WordPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Rate per word';
		return(
			<PriceOutput {...this.props} renderPrice={this.renderWordPrice} priceLabel={priceLabel} />
		)
	}
	renderWordPrice = () => {
		const fromLinePrice = this.props.fromLinePrice;
		return fromLinePrice.getWordPriceStr();
	}
}
