import React from 'react';
import LangSelect from './LangSelect.jsx';
import PriceSelect from './PriceSelect.jsx';

// Maybe add later
// import Toggle from './Toggle.jsx';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="form-horizontal well">
        <PriceSelect {...this.props} />
        <LangSelect {...this.props} langLabel="Source language"/>
      </form>
    )
  }
}
