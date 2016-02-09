//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

import MoreRatesBox from './MoreRatesBox/MoreRatesBox.jsx';
import AssumptionsBox from './AssumptionsBox/AssumptionsBox.jsx';

export default (props) => (
	<Accordion>
			<Panel header="More rates" eventKey="1">
					<MoreRatesBox {...props}/>
			</Panel>
			<Panel header="Assumptions" eventKey="2">
					<AssumptionsBox {...props} />
			</Panel>
			<Panel header="Details" eventKey="3"></Panel>
	</Accordion>
)
