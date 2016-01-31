//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import './App.scss';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import Converter from './Converter/Converter.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div>
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
