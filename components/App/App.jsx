//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//
import React from 'react';
import './App.scss';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import LinesToWords from './Converter/LinesToWords.jsx';
import WordsToLines from './Converter/WordsToLines.jsx';
import store from './utils/LocalStorage.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		const defaultState = {
			detailsPanelOpen: false
		};

		this.storageName = 'AppState';
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
	render () {
		return (
			<div>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
					 <LinesToWords {...this.state} />
					</Tab>
					<Tab eventKey={2} title="Words → Lines">
						<WordsToLines {...this.state} />
					</Tab>
	  		</Tabs>
			</div>
		);
	}
}
