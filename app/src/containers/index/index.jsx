import React from 'react'
import {Link} from 'react-router'
import {connect} from '../../lib/helper'

require('./index.scss');

export default class extends React.Component {
  render(){
    var {index} = this.props;
    return (<div>
              React Redux Rocks! {index}
              <br />
              <Link to="/counter">Counter</Link>&nbsp;|&nbsp;
              <Link to="/fetch">Fetch</Link>&nbsp;|&nbsp;
              <Link to="/form">Form</Link>&nbsp;|&nbsp;
              <Link to="/product">Product</Link>
            </div>)
  }
};
