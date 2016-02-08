//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import store from '../utils/LocalStorage.js';
import LangModel from '../utils/LangModel.js';
import calcPrices from '../utils/calcPrices.js';

import InputBox from './InputBox/InputBox.jsx';
import SourceLangSelect from './InputBox/LangSelect/SourceLangSelect.jsx';
import WordPriceSelect from './InputBox/PriceSelect/WordPriceSelect.jsx';

import OutputBox from './OutputBox/OutputBox.jsx';
import LinePriceOutput from './OutputBox/PriceOutput/LinePriceOutput.jsx';

import DetailsAccordion from './DetailsAccordion.jsx';

export default class WordsToLines extends React.Component {
		constructor(props) {
				super(props);
				const defaultState = {
						sourceLang: 'German',
						wordPrice: '0.20'
				};
				this.state = defaultState;
		}
		_changeWordPrice = (wordPrice) => {
				this.setState({wordPrice});
		}
		_changeSourceLang = (langName) => {
				this.setState({sourceLang: langName});
		}
		render() {
				const languageData = LangModel.langData;
				const sourceLang = this.state.sourceLang;
				const wordPrice = this.state.wordPrice;
				const priceOutput = calcPrices({sourceLang, wordPrice});
				return (
						<div>
								<InputBox>
										<WordPriceSelect {...this.state} _changeWordPrice={this._changeWordPrice}/>
										<SourceLangSelect {...this.state} _changeSourceLang={this._changeSourceLang} languageData={languageData}/>
								</InputBox>
								<OutputBox>
										<LinePriceOutput {...this.state} priceOutput={priceOutput}/>
								</OutputBox>
								<DetailsAccordion {...this.state} priceOutput={priceOutput}/>
						</div>
				)
		}
}
