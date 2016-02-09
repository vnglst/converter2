//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import PriceOutput from '../../PriceOutput.jsx';

export default({priceOutput}) => (
	<PriceOutput priceStr={priceOutput.linePriceStr} priceLabel="Per line"/>
)
