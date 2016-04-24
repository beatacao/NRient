export function onUserInput (isStockOnly, filterText) {
  return {
    type: 'USERINPUT',
    isStockOnly: isStockOnly,
    filterText: filterText
  }
}
