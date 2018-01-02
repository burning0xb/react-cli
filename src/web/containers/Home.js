import React, { Component, PropTypes } from 'react';
import '../../../assets/styles/home/index.less';

export default class Home extends Component {

  static propTypes = {
    home: PropTypes.object,
    history: PropTypes.object
  };

  jump(event) {
    event.preventDefault();
    this.props.history.push('/r1');
  }

  render() {
    return (
      <div className="home-containers">
        我是首页
        <button onClick={this.jump.bind(this)}>跳转到r1</button>
      </div>
    );
  }
}
