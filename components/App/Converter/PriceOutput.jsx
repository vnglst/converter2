//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

export default({priceStr, priceLabel}) => (
		<div className="form-group">
				<label className="col-sm-3 control-label" htmlFor="priceSpan">
						{priceLabel}
				</label>
				<div className="col-sm-9">
						<span className="form-control" id="priceSpan" readOnly>
								{priceStr}
						</span>
				</div>
		</div>
);
