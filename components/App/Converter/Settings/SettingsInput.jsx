//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

export default class SettingsInput extends React.Component {
		render() {
			const priceStr = this.props.priceStr;
			const priceLabel = this.props.priceLabel;
			return (
				<div className="form-group">
						<label className="col-sm-3 control-label" htmlFor="priceSpan">
								{priceLabel}
						</label>
						<div className="col-sm-9">
								<input ref="setting" type="text" value={priceStr} onChange={this._handleChange} className="form-control" id="priceSpan"/>
						</div>
				</div>
		)
	}
	_handleChange = () => {
		const value = this.refs.setting.value;
		this.props._changeSetting(value);
	}
}
