import React, { Component } from 'react';

class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const orderTotal = orderIds.reduce((acc, currentValue) => {
      const product = this.props.products[currentValue];
      const count = this.props.order[currentValue];
      return acc + count * product.price;
    }, 0);
    return <div>order</div>;
  }
}

export default Order;
