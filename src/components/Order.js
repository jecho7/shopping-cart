import React, { Component } from 'react';

class Order extends Component {
  formatPrice = str => {
    const [dollarSign, ...rest] = str;
    return `${parseFloat(rest.join('')).toFixed(2)}`;
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const orderTotal = orderIds.reduce((acc, currentValue) => {
      const product = this.props.products[currentValue];
      const count = this.props.order[currentValue];
      console.log(acc + count * this.formatPrice(product.price));
      return acc + count * this.formatPrice(product.price);
    }, 0);
    return <div>Your total is: ${orderTotal}</div>;
  }
}

export default Order;
