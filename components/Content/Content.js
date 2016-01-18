//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { PropTypes } from 'react';
import './Content.scss';
import Link from '../Link';

function Content({ children }) {
  return (
    <div className="Content">
      {children}
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Content;
