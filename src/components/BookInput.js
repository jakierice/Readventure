import React, { Component, Fragment } from 'react';

export default class extends Component {
  state = {
    title: ''
  };

  setTitle = e => {
    console.log(e.target.value);
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <input type="type" value={this.state.title} onChange={this.setTitle} />
        {this.props.children(this.state.title)}
      </Fragment>
    );
  }
}
