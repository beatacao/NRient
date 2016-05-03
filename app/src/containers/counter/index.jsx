import React from 'react';
import Counter from '../../components/counter'

require('./style.scss');

class CounterApp extends React.Component {
  render(){
    return <div><Counter /></div>
  }
}

module.exports = CounterApp;