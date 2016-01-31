//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceModel from '../../utils/PriceModel.js';

export default class PriceOutput extends React.Component {
	render () {
		const priceString = this.props.renderPrice();
		const priceLabel = this.props.priceLabel
		return(
			<div className="form-group">
				<label className="col-sm-3 control-label" htmlFor="priceSpan">
					{priceLabel}<sup> (1)</sup>
				</label>
				<div className="col-sm-9">
					<span className="form-control" id="priceSpan" readOnly>
						{priceString}
					</span>
				</div>
			</div>
		)
	}
}
