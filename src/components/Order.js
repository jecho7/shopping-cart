import React, { Component } from 'react';

class Order extends Component {
  render() {
    const { order, products } = this.props;
    const orderIds = Object.keys(order);
    const orderTotal = orderIds.reduce((acc, elem) => {
      const product = products[elem];
      const count = order[elem];
      return acc + count * product.price;
    }, 0);
    return <div>Your total is: ${parseFloat(orderTotal).toFixed(2)}</div>;
  }
}

export default Order;
