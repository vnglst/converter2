//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { Component, PropTypes } from 'react';

export default class extends Component {

  static propTypes = {
    error: PropTypes.instanceOf(Error),
  };

  render() {
    return (
      <div className="Content">
        <h1>Error</h1>
        <pre>{
          this.props.error ?
            this.props.error.message + '\n\n' + this.props.error.stack :
            'A critical error occurred.'
        }</pre>
      </div>
    );
  }

}
