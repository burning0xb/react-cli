import React, { Component, PropTypes } from 'react';

export default class R1 extends Component {

  static propTypes = {
    R1: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  mock() {
    fetch('./mock/data.json').then((res) => {
      return res.json();
    }).then((res) => {
      this.setState({ res: res.a });
    });
  }

  render() {
    return (
      <div className="home-containers">
        我是R1
        <button onClick={this.mock.bind(this)}>fetch</button>
        <div>
          {!this.state.res ? '我还没有数据' : this.state.res}
        </div>
      </div>
    );
  }
}
