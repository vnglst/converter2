//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import InputBox from './InputBox/InputBox.jsx';
import SourceLangSelect from './InputBox/LangSelect/SourceLangSelect.jsx';
import LinePriceSelect from './InputBox/PriceSelect/LinePriceSelect.jsx';
import OutputBox from './OutputBox/OutputBox.jsx';
import DetailsBox from './DetailsBox/DetailsBox.jsx';

export default class Converter extends React.Component {
	render () {
		const currentLang = this.props.fromLinePrice.getLangStr();
		return(
			<div>
				<InputBox >
          <LinePriceSelect {...this.props} />
          <SourceLangSelect {...this.props} currentLang={currentLang} />
        </InputBox>
				<OutputBox {...this.props}/>
			</div>
		)
	}
}
