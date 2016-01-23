//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import * as converterUtils from '../../utils/converterUtils.js';
import Table from 'react-bootstrap/lib/Table';
import CollapsiblePanel from '../CollapsiblePanel.jsx';

export default class DetailsBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const currentLang = this.props.currentLang;
		const stats = converterUtils.getStats(currentLang);
		const detailsPanelOpen = this.props.detailsPanelOpen;
		const toUnit = this.props.toUnit;
		return (
			<CollapsiblePanel {...this.props} titelText="Details">
				<Table fill striped hover>
					<thead>
						<tr>
							<th>Based on</th>
							<th>Price per {toUnit} </th>
							<th>For {currentLang}</th>
						</tr>
					</thead>
					<tbody>
						{stats.map(this.renderRow)}
					</tbody>
					<tfoot>
						<tr>
							<td><sup>(1)</sup> <b>Standard line</b></td>
							<td>55 characters (including spaces)</td>
						</tr>
					</tfoot>
				</Table>
			</CollapsiblePanel>
		)
	}
	renderRow = (data, i) => {
		const source = data.source;
		const charsPerWord = data.charsPerWord;
		const wordsPerLine = converterUtils.calculateWordsPerLine(charsPerWord);
		const priceString = this.getPriceString(charsPerWord);
		return (
			<tr key={i}>
				<td>{source}</td>
				<td>{priceString}</td>
				<td>{wordsPerLine.toFixed(1)} words per line<sup> (1)</sup></td>
			</tr>
		);
	}
	getPriceString = (charsPerWord) => {
		const fromUnit = this.props.fromUnit;
		switch (fromUnit){
			case 'word':
				return this.getLinePriceString(charsPerWord);
				break;
			case 'line':
				return this.getWordPriceString(charsPerWord);
				break;
			default:
				return 'Unit not recognized'
		}
	}
	getWordPriceString = (charsPerWord) => {
		const linePrice = this.props.currentPrice;
		const wordPriceString = converterUtils.getWordPriceString(linePrice, charsPerWord);
		return wordPriceString;
	}
	getLinePriceString = (charsPerWord) => {
		const wordPrice = this.props.currentPrice;
		const linePriceString = converterUtils.getLinePriceString(wordPrice, charsPerWord);
		return linePriceString;
	}
}
