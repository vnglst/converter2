import React from 'react';
import converterUtils from './utils/converterUtils.js';

export default class PriceOutput extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		const wordPriceString = this.renderPrice();
		const priceLabel = 'Rate per '+this.props.toUnit+' (range)';
		return(
			<div className="form-group">
				<label className="col-sm-2 control-label" htmlFor="priceSpan">
					{priceLabel}
				</label>
				<div className="col-sm-10">
					<span className="form-control" id="priceSpan" readOnly>
						{wordPriceString}
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
		const linePriceString = converterUtils.getLinePriceRangeString(langName, wordPrice);
		return linePriceString;
	}
	renderWordPrice = () => {
		const langName = this.props.currentLang;
		const linePrice = this.props.currentPrice;
		const wordPriceString = converterUtils.getWordPriceRangeString(langName, linePrice);
		return wordPriceString;
	}
}
