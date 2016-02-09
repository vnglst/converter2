//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

import MoreRatesBox from './MoreRatesBox.jsx';

export default (props) => (
	<Accordion defaultActiveKey="1">
			<Panel header="More rates" eventKey="1">
					<MoreRatesBox {...props}/>
			</Panel>
			<Panel header="Details" eventKey="2"></Panel>
	</Accordion>
)
