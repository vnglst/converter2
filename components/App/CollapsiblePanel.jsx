import React from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class CollapsiblePanel extends React.Component {
	constructor(props) {
		super(props);
	}
	render () {
		const panelOpen = this.props.detailsPanelOpen;
		return(
			<div>
				<Button bsStyle="link" onClick={this._handleClick}>
					{this.props.titelText}
          {this._getArrow()}
				</Button>
				<Panel collapsible expanded={panelOpen}>
					{this.props.children}
				</Panel>
			</div>
		)
	}
  _getArrow = () => {
		const panelOpen = this.props.detailsPanelOpen;
    return (!panelOpen) ? ' ►' : ' ▼';
  }
  _handleClick = () => {
    this.props.onPanelOpen();
  }
}
