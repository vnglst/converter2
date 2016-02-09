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
	render () {
		return (
			<div>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
					 <LinesToWords />
					</Tab>
					<Tab eventKey={2} title="Words → Lines">
						<WordsToLines />
					</Tab>
					<Tab eventKey={3} title="Settings">
					</Tab>
	  		</Tabs>
			</div>
		);
	}
}
