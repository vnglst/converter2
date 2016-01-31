//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import './App.scss';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import LinesToWords from './Converter/LinesToWords.jsx';
import store from './utils/LocalStorage';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		const defaultState = {
			currentLang: 'German',
			currentPrice: 1.35,
			detailsPanelOpen: false
		};

		this.storageName = 'ConverterState';
		const storedState = store(this.storageName);
		// storedState is "false" if empty OR environment != browser
		this.state = storedState || defaultState;
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
	_changePrice = (price) => {
		this.setState({currentPrice: price});
	}
	_changeLang = (lang) => {
		this.setState({currentLang: lang});
	}
	render () {
		return (
			<div>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
						<LinesToWords {...this.state} />
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
