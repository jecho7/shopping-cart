import React, { Component } from 'react';

class Product extends Component {
  formatPrice = str => {
    const [dollarSign, ...rest] = str;
    return `${dollarSign}${parseFloat(rest.join(''))}`;
  };

  quantityChange = event => {
    const quantity = parseFloat(event.currentTarget.value);
    this.props.addToOrder(this.props.index, quantity);
  };

  render() {
    const { image, name, price } = this.props.productDetails;

    return (
      <li className="product-list">
        <img src={image} alt={name} />
        <h3 className="product-name">
          {name}
          <span className="price">{this.formatPrice(price)}</span>
        </h3>
        <input
          type="text"
          name={this.props.index}
          onChange={this.quantityChange}
          placeholder="enter quantity"
        />
      </li>
    );
  }
}

export default Product;
