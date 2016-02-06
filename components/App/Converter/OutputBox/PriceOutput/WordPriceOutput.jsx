//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default class WordPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per word';
		const wordPriceStr = this.props.priceOutput.wordPriceStr;
		return(
			<PriceOutput {...this.props} priceStr={wordPriceStr} priceLabel={priceLabel} />
		)
	}
}
