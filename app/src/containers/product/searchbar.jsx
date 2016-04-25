import React from 'react';

class SearchBar extends React.Component {
  handleChange(){
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.isStockOnlyInput.checked
    )
  }
  render(){
    return (<form>
              <input type="text" placeholder="Search..." 
                value={this.props.filterText} 
                onChange={this.handleChange.bind(this)}
                ref='filterTextInput'/>
              <p>
                <input type="checkbox" 
                  checked={this.props.isStockOnly} 
                  onChange={this.handleChange.bind(this)}
                  ref='isStockOnlyInput'/>
                {' '}
                Only show products in stock
              </p>
            </form>)
  }
}

export default SearchBar;

