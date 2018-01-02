import React, { Component, PropTypes } from 'react';
import '../../../assets/styles/header/index.less';

export default class Header extends Component {

  static propTypes = {
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="react-header">
        </div>
    );
  }

}
