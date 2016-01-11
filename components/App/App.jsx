//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import './App.scss';
import { Tab, Tabs } from 'react-bootstrap';
import Converter from './Converter.jsx';
import logoSource from './img/logo-vangilst.png';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div className="Content">
				<h1>Translator's Converter</h1>
				<Tabs defaultActiveKey={1}>
					<Tab eventKey={1} title="Lines → Words">
						<Converter
							defaultPrice={1.35}
							defaultLang="German"
							fromUnit="line"
							toUnit="word" />
					</Tab>
					<Tab eventKey={2} title="Words → Lines">
						<Converter
							defaultPrice={0.19}
							defaultLang="German"
							fromUnit="word"
							toUnit="line" />
					</Tab>
	  		</Tabs>
			</div>
		);
	}
}
