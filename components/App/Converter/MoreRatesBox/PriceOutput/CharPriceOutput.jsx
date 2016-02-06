//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default class CharPriceOutput extends React.Component {
	render () {
		const priceLabel = 'Per character';
		const charPriceStr = this.props.priceOutput.charPriceStr;
		return(
			<PriceOutput {...this.props} priceStr={charPriceStr} priceLabel={priceLabel} />
		)
	}
}
