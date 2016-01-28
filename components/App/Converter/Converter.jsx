//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import InputBox from './InputBox/InputBox.jsx';
import OutputBox from './OutputBox/OutputBox.jsx';
import DetailsBox from './DetailsBox/DetailsBox.jsx';
import store from '../utils/LocalStorage';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);

		const fromUnit = props.fromUnit;
		const toUnit = props.toUnit;

    const defaultState = {
      fromUnit: fromUnit,
      toUnit: toUnit,
      currentLang: props.defaultLang,
      currentPrice: props.defaultPrice,
      detailsPanelOpen: false
    };

    this.storageName = 'localStorage' + fromUnit + 'to' + toUnit;
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
		return(
			<div>
				<InputBox {...this.state} onPriceChange={this._changePrice} onLangChange={this._changeLang}/>
				<OutputBox {...this.state}/>
				<DetailsBox {...this.state} onPanelOpen={this._openPanel}/>
			</div>
		)
	}
}
