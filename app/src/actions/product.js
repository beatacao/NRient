import {api} from '../lib/fetch';

export function fetch(){
	return dispatch => {
		return api.read('products').then(
			product => dispatch(fetched(product)),
			err => dispatch(unfetched(err))
		)
		// var product = [
		// 				{"category": 'Sporting Goods', "price": '$49.99', "stocked": true, "name": 'Football'},
		// 				{"category": 'Sporting Goods', "price": '$9.99', "stocked": true, "name": 'Baseball'},
		// 				{"category": 'Sporting Goods', "price": '$29.99', "stocked": false, "name": 'Basketball'},
		// 				{"category": 'Electronics', "price": '$99.99', "stocked": true, "name": 'iPod Touch'},
		// 				{"category": 'Electronics', "price": '$399.99', "stocked": false, "name": 'iPhone 5'},
		// 				{"category": 'Electronics', "price": '$199.99', "stocked": true, "name": 'Nexus 7'}
		// 			]
		// return dispatch(fetched(product));
	}
}

export function onUserInput(filterText, isStockOnly) {
  return {
    type: 'USERINPUT',
    isStockOnly: isStockOnly,
    filterText: filterText
  }
}

export function fetched(products){
	return {
		type: 'PRODUCTS_FETCHED',
		payload: products
	}
}

export function unfetched(err){
	return {
		type: 'PRODUCT_UNFETCHED',
		paload: err
	}
}
