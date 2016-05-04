export function product(state = {filterText:'', isStockOnly:false, products:[]}, action) {
  switch (action.type) {
    case 'USERINPUT':
		return {...state, filterText: action.filterText, isStockOnly: action.isStockOnly};
		break;
	case 'PRODUCTS_FETCHED':
		return {...state, products: action.payload};
		break;
	case 'PRODUCT_UNFETCHED':
		return {...state, products:null};
		break;
  }
  return state;
}
