//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceModel from '../../utils/PriceModel.js';

export default class PriceOutput extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const priceString = this.renderPrice();
		const priceLabel = 'Rate per '+this.props.toUnit;
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
	renderPrice = () => {
		const fromUnit = this.props.fromUnit;
		switch (fromUnit){
			case 'word':
				return this.renderLinePrice();
				break;
			case 'line':
				return this.renderWordPrice();
				break;
			default:
				return 'Unit not recognized'
		}
	}
	renderLinePrice = () => {
		const langName = this.props.currentLang;
		const wordPrice = this.props.currentPrice;
		const priceModel = new PriceModel(langName);
		priceModel.setWordPrice(wordPrice);
		return priceModel.getLinePriceRange();
	}
	renderWordPrice = () => {
		const langName = this.props.currentLang;
		const linePrice = this.props.currentPrice;
		const priceModel = new PriceModel(langName);
		priceModel.setLinePrice(linePrice);
		return priceModel.getWordPriceRange();
	}
}
