//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React, { PropTypes } from 'react';
import './Layout.scss';
import Navigation from '../Navigation';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
