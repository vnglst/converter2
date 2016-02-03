//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//
import React from 'react';
import './App.scss';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import LinesToWords from './Converter/LinesToWords.jsx';
import store from './utils/LocalStorage.js';
import PriceModel from './utils/PriceModel.js';
import LangModel from './utils/LangModel.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		const fromLinePrice = new PriceModel({
			langName: 'German',
			linePrice: 1.35
		});
		const defaultState = {
			fromLinePrice: fromLinePrice,
			detailsPanelOpen: false
		};

		this.storageName = 'ConverterState';
		const storedState = store(this.storageName);
		// storedState is "false" if empty OR environment != browser
		// this.state = storedState || defaultState;
		this.state = defaultState;
	}

	componentDidUpdate () {
		// Store new state in localStorage
		store(this.storageName, this.state);
	}
	_openPanel = () => {
		this.setState({
			detailsPanelOpen: !this.state.detailsPanelOpen
		});
	}
	_changeLinePrice = (linePrice) => {
		const fromLinePrice = this.state.fromLinePrice;
		fromLinePrice.setLinePrice(linePrice);
		this.setState({ fromLinePrice });
	}
	_changeSourceLang = (langName) => {
		const fromLinePrice = this.state.fromLinePrice;
		fromLinePrice.setLang(langName);
		this.setState({ fromLinePrice });
	}
	render () {
		const languageData = LangModel.getAllLangData();
		return (
			<div>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
						<LinesToWords {...this.state} _changeLinePrice={this._changeLinePrice} _changeSourceLang={this._changeSourceLang} languageData={languageData} />
					</Tab>
	  		</Tabs>
			</div>
		);
	}
}
