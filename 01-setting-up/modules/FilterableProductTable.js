import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: ''
    }
  }

  handleFilterTextInput(e) {
    this.setState({
      filterText: e.target.value
    });

    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInput(e) {
    this.setState({
      isOnlyShowStock: e.target.checked
    });

    this.props.onOnlyShowStock(e.target.checked)
  }

  render() {
    return (
      <form>
        <input type="text"
          placeholder={this.props.placeHolder}
          value={this.state.filterText}
          onChange={this.handleFilterTextInput.bind(this)}
        />
        <p>
          <input type="checkbox" checked={this.state.isOnlyShowStock} onChange={this.handleInStockInput.bind(this)} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class ProductTableRow extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {product} = this.props;
    const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends Component {
  constructor(props) {
    super(props)

  }

  renderList() {
    const { products } = this.props;
    
    return products.map((product) => {
      return (
        <ProductTableRow product={product} key={product.name} />
      );
    });
  }

  render() {
    const { products } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }

}

class FilterableProductTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      isOnlyShowStock: false,
      isShowAll: true
    }
  }

  handleFilterTextInput(value) {
    this.setState({
      filterText: value
    });
  }

  handleInStockInput(value) {
    this.setState({
      isOnlyShowStock: value,
      isShowAll: !value
    });
  }

  render() {
    const {filterText, isOnlyShowStock, isShowAll} = this.state;
    const PRODUCTS = [
      { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ];
    const filterProducts = PRODUCTS.filter((product) => product.name.indexOf(filterText) !== -1);
    const onlyShowStockProducts = isShowAll ? filterProducts : filterProducts.filter((product => product.stocked === isOnlyShowStock))

    return (
      <div>
        <SearchBar
          placeHolder="搜素"
          onFilterTextInput={this.handleFilterTextInput.bind(this)}
          onOnlyShowStock={this.handleInStockInput.bind(this)}
        />
        <ProductTable products={onlyShowStockProducts} />
      </div>
    );
  }
}

ProductTable.propTypes = {
  products: PropTypes.array
}

export default FilterableProductTable;
