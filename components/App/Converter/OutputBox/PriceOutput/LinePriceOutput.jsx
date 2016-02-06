//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default class LinePriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per line';
		const linePriceStr = this.props.priceOutput.linePriceStr;
		return(
			<PriceOutput {...this.props} priceStr={linePriceStr} priceLabel={priceLabel} />
		)
	}
}
