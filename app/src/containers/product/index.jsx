import React from 'react';
import {connect} from '../../lib/helper';
import SearchBar from './searchbar';
import ProductTable from './producttable';
import * as productActions from '../../actions/product';

import './product.scss';

// var PRODUCTS = [
//   {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//   {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//   {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//   {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//   {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//   {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];

class Product extends React.Component {
	// componentWillMount(){
	// 	this.setState({
	// 		filterText: '',
	// 		isStockOnly: false
	// 	})
	// }
	// handleUserInput(filterText, isStockOnly){
	// 	this.setState({
	// 		filterText: filterText,
	// 		isStockOnly: isStockOnly
	// 	})
	// }
	render(){
		var {product:{filterText, isStockOnly, products}, actions} = this.props;
		return <div className='product'>
			<SearchBar 
				filterText = {filterText} 
				isStockOnly = {isStockOnly}
				onUserInput = {actions.onUserInput.bind(this, filterText, isStockOnly)} />
			<ProductTable 
				products={products} 
				filterText = {filterText} 
				isStockOnly = {isStockOnly} />
		</div>
	}
}

export default connect(state => ({product: state.product}),
						productActions)(Product);


 