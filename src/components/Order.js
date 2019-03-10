import React, { Component } from 'react';

class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.order);
    const orderTotal = orderIds.reduce((acc, elem) => {
      const product = this.props.products[elem];
      const count = this.props.order[elem];
      return acc + count * product.price;
    }, 0);
    return <div>Your total is: ${parseFloat(orderTotal).toFixed(2)}</div>;
  }
}

export default Order;
