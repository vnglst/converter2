//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';

const InputBox = ({children}) => (
  <form className="form-horizontal well">
    {children}
  </form>
);

InputBox.propTypes = {
 children: React.PropTypes.node.isRequired
}

export default InputBox;
