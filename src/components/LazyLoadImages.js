import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';

class LazyLoadImages extends Component {
  static defaultProps = {
    tag: 'div',
  };

  state = {
    isIntersecting: false,
  };

  handleChange = ({ isIntersecting }) => {
    this.setState({ isIntersecting });
  };

  render() {
    const { tag: Tag, children, ...rest } = this.props;

    return (
      <Observer {...rest} onChange={this.handleChange}>
        <Tag>{children(this.state.isIntersecting)}</Tag>
      </Observer>
    );
  }
}
export default LazyLoadImages;
