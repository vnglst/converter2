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
						<div className="input-group">
						  <input ref="setting" type="text" className="form-control" value={priceStr} onChange={this._handleChange}/>
							<span className="input-group-addon">{priceLabel}</span>
						</div>
				</div>
		)
	}
	_handleChange = () => {
		const value = this.refs.setting.value;
		this.props._changeSetting(value);
	}
}
