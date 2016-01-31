//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import InputBox from './InputBox/InputBox.jsx';
import LangSelect from './InputBox/LangSelect.jsx';
import WordPriceSelect from './InputBox/WordPriceSelect.jsx';
import LinePriceSelect from './InputBox/LinePriceSelect.jsx';
import OutputBox from './OutputBox/OutputBox.jsx';
import DetailsBox from './DetailsBox/DetailsBox.jsx';

export default class Converter extends React.Component {
	render () {
		return(
			<div>
				<InputBox >
          <LinePriceSelect {...this.props} onPriceChange={this._changePrice} />
          <LangSelect {...this.props} onLangChange={this._changeLang} langLabel="Source language"/>
        </InputBox>
				<OutputBox {...this.props}/>
        {/*
        <DetailsBox {...this.state} onPanelOpen={this._openPanel}/>
        */}
			</div>
		)
	}
}
