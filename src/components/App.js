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
    console.log(sortedProducts);
  }

  sortProducts = productList => productList.sort((a, b) => b.match - a.match);

  addToOrder = (key, quantity) => {
    const order = { ...this.state.order };
    order[key] = quantity;
    this.setState({
      order,
    });
  };

  render() {
    return (
      <div className="shopping-cart">
        <div className="products">
          <Header shopperName={this.state.fullName} />
          <ul className="list-of-products">
            {Object.keys(this.state.products).map(key => (
              <Product
                key={key}
                index={key}
                productDetails={this.state.products[key]}
                order={this.state.order}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <div className="totals">
          <Order products={this.state.products} order={this.state.order} />
        </div>
      </div>
    );
  }
}

export default App;
