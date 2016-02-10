//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import LangModel from '../../utils/LangModel.js';
import calcPrices from '../../utils/calcPrices.js';

import InputBox from '../InputBox.jsx';
import SourceLangSelect from '../SourceLangSelect.jsx';
import LinePriceSelect from './LinePriceSelect.jsx';
import WordPriceOutput from './WordPriceOutput.jsx';
import DetailsAccordion from '../DetailsAccordion/DetailsAccordion.jsx';

export default class LinesToWords extends React.Component {
		constructor(props) {
				super(props);
				const defaultState = {
						sourceLang: 'German',
						linePrice: '1.55'
				};
				this.state = defaultState;
		}
		_changeLinePrice = (linePrice) => {
				this.setState({linePrice});
		}
		_changeSourceLang = (langName) => {
				this.setState({sourceLang: langName});
		}
		render() {
				const languageData = LangModel.langData;
				const sourceLang = this.state.sourceLang;
				const linePrice = this.state.linePrice;
				const charsPerLine = this.props.charsPerLine;
				const charsPerPage = this.props.charsPerPage;
				const wordsPerDay = this.props.wordsPerDay;
				const hoursPerDay = this.props.hoursPerDay;
				const priceOutput = calcPrices({sourceLang, linePrice, charsPerLine, charsPerPage, wordsPerDay, hoursPerDay});
				return (
						<div>
								<InputBox >
										<LinePriceSelect {...this.state} _changeLinePrice={this._changeLinePrice}/>
										<SourceLangSelect {...this.state} _changeSourceLang={this._changeSourceLang} languageData={languageData}/>
										<WordPriceOutput {...this.state} priceOutput={priceOutput}/>
								</InputBox>
								<DetailsAccordion {...this.state} priceOutput={priceOutput}/>
						</div>
				)
		}
}
