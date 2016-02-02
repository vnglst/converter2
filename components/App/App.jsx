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

export default class App extends React.Component {
	constructor(props) {
		super(props);
		const fromLinePrice = new PriceModel('German');
		fromLinePrice.setLinePrice(1.35);
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
	_changeLang = (langName) => {
		const linePrice = this.state.fromLinePrice.linePrice;
		const newFromLinePrice = new PriceModel(langName);
		newFromLinePrice.setLinePrice(linePrice);
		this.setState({fromLinePrice: newFromLinePrice});
	}
	render () {
		return (
			<div>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
						<LinesToWords {...this.state} _changeLinePrice={this._changeLinePrice} _changeLang={this._changeLang} />
					</Tab>
					{/*
					<Tab eventKey={2} title="Words → Lines">
						<Converter
							defaultPrice={0.19}
							defaultLang="German"
							fromUnit="word"
							toUnit="line" />
					</Tab>
					*/}
	  		</Tabs>
			</div>
		);
	}
}
