import React, { Component } from 'react'
import Header from '../Header';
import OrderList from '../OrderList';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <OrderList/>
      </div>
    )
  }
}
