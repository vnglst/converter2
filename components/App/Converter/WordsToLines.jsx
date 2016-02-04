//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';

import store from '../utils/LocalStorage.js';
import LangModel from '../utils/LangModel.js';
import PriceModel from '../utils/PriceModel.js';

import InputBox from './InputBox/InputBox.jsx';
import SourceLangSelect from './InputBox/LangSelect/SourceLangSelect.jsx';
import WordPriceSelect from './InputBox/PriceSelect/WordPriceSelect.jsx';

import OutputBox from './OutputBox/OutputBox.jsx';
import LinePriceOutput from './OutputBox/PriceOutput/LinePriceOutput.jsx';

import DetailedOutput from './DetailedOutput/DetailedOutput.jsx';
import PagePriceOutput from './DetailedOutput/PriceOutput/PagePriceOutput.jsx';
import HourPriceOutput from './DetailedOutput/PriceOutput/HourPriceOutput.jsx';


export default class WordsToLines extends React.Component {
	constructor(props) {
		super(props);
		const priceModel = new PriceModel({
			sourceLang: 'English',
			wordPrice: 0.20
		});
		const defaultState = {
			priceModel
		};
		this.storageName = 'WordsToLines';
		const storedState = store(this.storageName);
		// storedState is "false" if empty OR environment != browser
		// this.state = storedState || defaultState;
		this.state = defaultState;
	}
	componentDidUpdate () {
		// Store new state in localStorage
		store(this.storageName, this.state);
	}
	_changeWordPrice = (wordPrice) => {
		const priceModel = this.state.priceModel;
		priceModel.setWordPrice(wordPrice);
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
				<InputBox>
          <WordPriceSelect {...this.state} _changeWordPrice={this._changeWordPrice}/>
          <SourceLangSelect {...this.state} _changeSourceLang={this._changeSourceLang} languageData={languageData} />
        </InputBox>
				<OutputBox>
					<LinePriceOutput {...this.state} />
				</OutputBox>
				<Accordion>
					<Panel header="Other rates" eventKey="1">
						<DetailedOutput>
							<PagePriceOutput {...this.state} />
							<HourPriceOutput {...this.state} />
						</DetailedOutput>
					</Panel>
					<Panel header="Assumptions" eventKey="2">
					</Panel>
					<Panel header="Details" eventKey="3">
					</Panel>
				</Accordion>
			</div>
		)
	}
}
