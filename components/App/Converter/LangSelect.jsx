import React from 'react';

export default class LangSelect extends React.Component {
	render () {
		const languageData = this.props.languageData;
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
						onChange={this._handleChange}
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
	_handleChange = () => {
		const lang = this.refs.lang.value
		this.props.onLangChange(lang);
	}
}
