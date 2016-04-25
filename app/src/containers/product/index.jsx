import React from 'react';
import {connect} from '../../lib/helper';
import SearchBar from './searchbar';
import ProductTable from './producttable';
import * as productActions from '../../actions/product';

import './product.scss';

class Product extends React.Component {
	componentWillMount(){
		this.props.actions.fetch();
	}
	render(){
		var {product:{filterText, isStockOnly, products}, actions} = this.props;
		return <div className='product'>
					<SearchBar 
						filterText = {filterText} 
						isStockOnly = {isStockOnly}
						onUserInput = {actions.onUserInput} />
					<ProductTable 
						products={products} 
						filterText = {filterText} 
						isStockOnly = {isStockOnly} />
				</div>
	}
}

module.exports = connect(state => ({product: state.product}), productActions)(Product);


 