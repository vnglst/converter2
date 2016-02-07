//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

import MoreRatesBox from './MoreRatesBox/MoreRatesBox.jsx';
import AssumptionsBox from './AssumptionsBox/AssumptionsBox.jsx';

export default class DetailsAccordion extends React.Component {
		render() {
				return (
						<Accordion>
								<Panel header="More rates" eventKey="1">
										<MoreRatesBox {...this.props}/>
								</Panel>
								<Panel header="Assumptions" eventKey="2">
										<AssumptionsBox {...this.props} />
								</Panel>
								<Panel header="Details" eventKey="3"></Panel>
						</Accordion>
				)
		}
}
