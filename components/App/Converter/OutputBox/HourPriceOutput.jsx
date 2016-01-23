//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as converterUtils from '../../utils/converterUtils.js';

export default class HourPriceOutput extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const priceString = this.renderPrice();
		const priceLabel = 'Rate per hour';
		return(
			<div className="form-group">
				<label className="col-sm-3 control-label" htmlFor="priceSpan">
					{priceLabel}<sup> (2)</sup>
				</label>
				<div className="col-sm-9">
					<span className="form-control" id="priceSpan" readOnly>
						{priceString}
					</span>
				</div>
			</div>
		)
	}
	renderPrice = () => {
		const fromUnit = this.props.fromUnit;
		switch (fromUnit){
			case 'word':
				return this.renderFromWordPrice();
				break;
			case 'line':
				return this.renderFromLinePrice();
				break;
			default:
				return 'Unit not recognized'
		}
	}
	renderFromWordPrice = () => {
		const langName = this.props.currentLang;
		const wordPrice = this.props.currentPrice;
		const hourPriceString = converterUtils.getHourPriceFromWordPrice(langName, wordPrice);
		return hourPriceString;
	}
	renderFromLinePrice = () => {
		const langName = this.props.currentLang;
		const linePrice = this.props.currentPrice;
		const hourPriceString = converterUtils.getHourPriceFromLinePrice(langName, linePrice);
		return hourPriceString;
	}
}
