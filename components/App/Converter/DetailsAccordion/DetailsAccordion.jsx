//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

import MoreRatesPanel from './MoreRatesPanel.jsx';
import DetailsPanel from './DetailsPanel.jsx';

export default (props) => (
	<Accordion defaultActiveKey="0">
			<Panel header="More rates" eventKey="1">
					<MoreRatesPanel {...props}/>
			</Panel>
			<Panel header={detailsHeader(props.priceOutput)} eventKey="2">
					<DetailsPanel {...props}/>
			</Panel>
	</Accordion>
)

const detailsHeader = (priceOutput) => (
	'Details for '+priceOutput.sourceLang
)
