//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

export default class AssumptionsInput extends React.Component {
	render () {
		const priceStr = this.props.priceStr
		const priceLabel = this.props.priceLabel
		return(
			<div className="form-group">
				<label className="col-sm-3 control-label" htmlFor="priceSpan">
					{priceLabel}
				</label>
				<div className="col-sm-9">
					<input type="text" value={priceStr} className="form-control" id="priceSpan" />
				</div>
			</div>
		)
	}
}
