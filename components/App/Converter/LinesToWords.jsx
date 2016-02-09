//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import store from '../utils/LocalStorage.js';
import LangModel from '../utils/LangModel.js';
import calcPrices from '../utils/calcPrices.js';

import InputBox from './InputBox/InputBox.jsx';
import SourceLangSelect from './InputBox/LangSelect/SourceLangSelect.jsx';
import LinePriceSelect from './InputBox/PriceSelect/LinePriceSelect.jsx';

import OutputBox from './OutputBox/OutputBox.jsx';
import WordPriceOutput from './OutputBox/PriceOutput/WordPriceOutput.jsx';

import DetailsAccordion from './DetailsAccordion.jsx';

export default class LinesToWords extends React.Component {
		constructor(props) {
				super(props);
				const defaultState = {
						sourceLang: 'German',
						linePrice: '1.45'
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
								</InputBox>
								<OutputBox>
										<WordPriceOutput {...this.state} priceOutput={priceOutput}/>
								</OutputBox>
								<DetailsAccordion {...this.state} priceOutput={priceOutput}/>
						</div>
				)
		}
}
