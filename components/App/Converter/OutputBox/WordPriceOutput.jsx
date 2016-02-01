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
	// renderLinePrice = () => {
	// 	const langName = this.props.currentLang;
	// 	const wordPrice = this.props.currentPrice;
	// 	const priceModel = new PriceModel(langName);
	// 	priceModel.setWordPrice(wordPrice);
	// 	return priceModel.getLinePriceRange();
	// }
	renderWordPrice = () => {
		const fromLinePrice = this.props.fromLinePrice;
		return fromLinePrice.getWordPriceRange();
	}
}
