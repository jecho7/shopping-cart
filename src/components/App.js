import React, { Component } from 'react';
import Header from './Header';
import productService from '../api/productService';
import Product from './Product';
import Order from './Order';

class App extends Component {
  state = {
    fullName: '',
    products: [],
    order: {},
  };

  componentDidMount() {
    const {
      first_name: firstName,
      last_name: lastName,
      product_list: productList,
    } = productService();

    const fullName = `${firstName} ${lastName}`;
    const sortedProducts = this.sortProducts(productList);

    this.setState({
      fullName,
      products: sortedProducts,
    });
  }

  formatPrice = str => {
    let priceArr = [...str];
    priceArr.splice(0, 1);
    priceArr = priceArr.join('');
    return parseFloat(priceArr).toFixed(2);
  };

  sortProducts = productList => {
    const formatedObj = productList
      .map(elem => {
        elem.price = this.formatPrice(elem.price);
        return elem;
      })
      .sort((a, b) => b.match - a.match);
    return formatedObj;
  };

  addToOrder = (key, quantity) => {
    const order = { ...this.state.order };
    order[key] = quantity;
    this.setState({
      order,
    });
  };

  render() {
    const { fullName, products, order } = this.state;
    return (
      <div className="shopping-cart">
        <div className="products">
          <Header shopperName={fullName} />
          <ul className="list-of-products">
            {Object.keys(products).map(key => (
              <Product
                key={key}
                index={key}
                productDetails={products[key]}
                order={order}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <div className="totals">
          <Order products={products} order={order} />
        </div>
      </div>
    );
  }
}

export default App;
