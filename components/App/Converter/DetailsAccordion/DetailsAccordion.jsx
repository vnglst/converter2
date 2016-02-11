//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, {PropTypes} from 'react';
import Accordion from 'react-bootstrap/lib/Accordion';
import Panel from 'react-bootstrap/lib/Panel';

import MoreRatesPanel from './MoreRatesPanel.jsx';
import DetailsPanel from './DetailsPanel.jsx';

const DetailsAccordion = ({priceOutput}) => (
		<Accordion defaultActiveKey="0">
				<Panel header="More rates" eventKey="1">
						<MoreRatesPanel priceOutput={priceOutput}/>
				</Panel>
				<Panel header={detailsHeader(priceOutput)} eventKey="2">
						<DetailsPanel {...priceOutput}/>
				</Panel>
		</Accordion>
)

DetailsAccordion.propTypes = {
	priceOutput: React.PropTypes.object.isRequired
}

const detailsHeader = (priceOutput) => ('Details for ' + priceOutput.sourceLang)

export default DetailsAccordion;
