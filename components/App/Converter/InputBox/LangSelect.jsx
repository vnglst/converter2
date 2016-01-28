import React from 'react';
import LangModel from '../../utils/LangModel.js';

export default class LangSelect extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const languageData = LangModel.getAllLangData();
		const langLabel = this.props.langLabel;
		const currentLang = this.props.currentLang;
		return (
			<div className="form-group">
				<label className="col-sm-3 control-label" htmlFor="langSelect">
					{langLabel}
				</label>
				<div className="col-sm-9">
					<select
						value={currentLang}
						onChange={this._changeLang}
	          className="form-control"
	          ref="lang"
						id="langSelect">
						{languageData.map(this._renderOption)}
					</select>
				</div>
			</div>
		)
	}
	_renderOption = (language, i) => {
		const name = language.name;
		return (
			<option key={i} value={name}>
				{name}
			</option>
		)
	}
	_changeLang = () => {
		const lang = this.refs.lang.value
		this.props.onLangChange(lang);
	}
}
