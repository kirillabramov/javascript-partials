import React, { Component } from 'react';

export default class OutsideAlerter extends Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      alert('You clicked outside of me!');
    }
  };

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}
