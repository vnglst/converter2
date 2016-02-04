//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

import store from '../utils/LocalStorage.js';
import LangModel from '../utils/LangModel.js';
import PriceModel from '../utils/PriceModel.js';

import InputBox from './InputBox/InputBox.jsx';
import SourceLangSelect from './InputBox/LangSelect/SourceLangSelect.jsx';
import LinePriceSelect from './InputBox/PriceSelect/LinePriceSelect.jsx';

import OutputBox from './OutputBox/OutputBox.jsx';
import WordPriceOutput from './OutputBox/PriceOutput/WordPriceOutput.jsx';

import PagePriceOutput from './DetailedOutput/PriceOutput/PagePriceOutput.jsx';

export default class LinesToWords extends React.Component {
	constructor(props) {
		super(props);
		const priceModel = new PriceModel({
			sourceLang: 'German',
			linePrice: 1.35
		});
		const defaultState = {
			priceModel
		};
		this.storageName = 'LinesToWords';
		const storedState = store(this.storageName);
		// storedState is "false" if empty OR environment != browser
		// this.state = storedState || defaultState;
		this.state = defaultState;
	}
	componentDidUpdate () {
		// Store new state in localStorage
		store(this.storageName, this.state);
	}
	_changeLinePrice = (linePrice) => {
		const priceModel = this.state.priceModel;
		priceModel.setLinePrice(linePrice);
		this.setState({ priceModel });
	}
	_changeSourceLang = (langName) => {
		const priceModel = this.state.priceModel;
		priceModel.setSourceLang(langName);
		this.setState({ priceModel });
	}
	render () {
		const languageData = LangModel.langData;
		return(
			<div>
				<InputBox >
          <LinePriceSelect {...this.state} _changeLinePrice={this._changeLinePrice}/>
          <SourceLangSelect {...this.state} _changeSourceLang={this._changeSourceLang} languageData={languageData} />
        </InputBox>
				<OutputBox>
					<WordPriceOutput {...this.state} />
					<PagePriceOutput {...this.state} />
				</OutputBox>
			</div>
		)
	}
}
