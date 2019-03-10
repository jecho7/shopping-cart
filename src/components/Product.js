import React, { Component } from 'react';
import LazyLoadImages from './LazyLoadImages';

class Product extends Component {
  quantityChange = event => {
    console.log(typeof event.currentTarget.value);
    const quantity =
      event.currentTarget.value === ''
        ? 0
        : parseFloat(event.currentTarget.value);
    this.props.addToOrder(this.props.index, quantity);
  };

  render() {
    const { image, name, price } = this.props.productDetails;

    return (
      <li className="product-list">
        <LazyLoadImages>
          {isViewable => {
            if (isViewable) {
              return <img src={image} alt={name} />;
            }
          }}
        </LazyLoadImages>
        <h3 className="product-name">
          {name}
          <span className="price">${price}</span>
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
