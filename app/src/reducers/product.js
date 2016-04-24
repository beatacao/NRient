var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var STATE = {
				filterText: '',
				isStockOnly: false,
				products: PRODUCTS
			}
export function product(state = STATE, action) {
  switch (action.type) {
    case 'USERINPUT':
    	state.filterText = action.filterText;
    	state.isStockOnly = action.isStockOnly;
		return state;
		break;
  }
  return state;
}
