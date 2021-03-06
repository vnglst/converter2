//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import LangModel from '../../utils/LangModel.js';
import calcPrices from '../../utils/calcPrices.js';

import InputBox from '../InputBox.jsx';
import SourceLangSelect from '../SourceLangSelect.jsx';
import WordPriceSelect from './WordPriceSelect.jsx';
import PriceOutput from '../PriceOutput.jsx';
import DetailsAccordion from '../DetailsAccordion/DetailsAccordion.jsx';

export default class WordsToLines extends React.Component {
		constructor(props) {
				super(props);
				const defaultState = {
						sourceLang: 'German',
						wordPrice: '0.21'
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
				const charsPerLine = this.props.charsPerLine;
				const charsPerPage = this.props.charsPerPage;
				const wordsPerDay = this.props.wordsPerDay;
				const hoursPerDay = this.props.hoursPerDay;
				const priceOutput = calcPrices({sourceLang, wordPrice, charsPerLine, charsPerPage, wordsPerDay, hoursPerDay});
				return (
						<div>
								<InputBox>
										<WordPriceSelect wordPrice={wordPrice} _changeWordPrice={this._changeWordPrice}/>
										<SourceLangSelect {...this.state} _changeSourceLang={this._changeSourceLang} languageData={languageData}/>
										<hr />
										<PriceOutput priceStr={priceOutput.linePriceStr} priceLabel="Per line"/>
								</InputBox>
								<DetailsAccordion {...this.state} priceOutput={priceOutput}/>
						</div>
				)
		}
}
