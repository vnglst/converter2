import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';

export default class CollapsiblePanel extends React.Component {
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
