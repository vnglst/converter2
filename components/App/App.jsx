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
				<p>The Word to Line Rates Converter calculates word to line prices. A standard line (a German "Normzeile") is assumed to be 55 characters including spaces. The converter also converts per line to per word prices.</p>
				<p>Charging per line is common practice in Germany. This may sound complicated and strange to translators used to word prices, but for many languages this is actually a much better and fairer way to estimate the amount of translation work involved, since the length of an average word varies greatly per language. Many agencies and clients outside Germay, however, still use word counts to estimate their prices. And that's where this conversion tool might come in handy!</p>
			</div>
		);
	}
}
