//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//
import React from 'react';
import './App.scss';
import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';
import LinesToWords from './Converter/LinesToWords.jsx';
import WordsToLines from './Converter/WordsToLines.jsx';
import Settings from './Converter/Settings/Settings.jsx';

import store from './utils/LocalStorage.js';

export default class App extends React.Component {
		constructor(props) {
				super(props);
				const defaultState = {
						charsPerLine: 55,
						charsPerPage: 1500,
						wordsPerDay: 2000,
						hoursPerDay: 7
				};
				this.state = defaultState;
		};
		render() {
				return (
						<div>
								<Tabs defaultActiveKey={1} >
										<Tab eventKey={1} title="Lines → Words">
												<LinesToWords {...this.state}/>
										</Tab>
										<Tab eventKey={2} title="Words → Lines">
												<WordsToLines {...this.state}/>
										</Tab>
										<Tab eventKey={3} title="Settings">
												<Settings {...this.state}
													_changeCharsPerLine={(charsPerLine) => this.setState({charsPerLine})}
													_changeCharsPerPage={(charsPerPage) => this.setState({charsPerPage})}
													_changeWordsPerDay={(wordsPerDay) => this.setState({wordsPerDay})}
													_changeHoursPerDay={(hoursPerDay) => this.setState({hoursPerDay})}
													/>
										</Tab>
								</Tabs>
						</div>
				);
		}
}
