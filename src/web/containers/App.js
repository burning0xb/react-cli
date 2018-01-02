import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as actions from '../../redux/modules/application';

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object
  };

  static childContextTypes = {
    user: PropTypes.object
  };

  getChildContext() {
    return {
      user: this.props.user
    };
  }

  render() {
    const { user } = this.props;

    return (
      <div className="root-container">
        <Header user={ user }/>
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}

export default connect(
  ({ application, menu }) => ({ ...application, ...menu }),
  dispatch => ({ ...bindActionCreators(actions, dispatch) })
)(App);
